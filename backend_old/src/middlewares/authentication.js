const jwt = require("jsonwebtoken");

module.exports = {
  async authenticateToken(request, response, next) {
    const authHeader = request.headers.authorization;
    const [scheme, token] = authHeader
      ? authHeader.split(" ")
      : [undefined, undefined];

    if (!token || token === null)
      return response.status(401).json({ error: "No token provided." });

    if (!/^Bearer$/i.test(scheme))
      return response.status(401).json({ error: "Token badformatted." });

    const validToken = await new Promise((res) => {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res(false);

        request.session = user;

        return res(true);
      });
    });

    if (validToken) return next();
    return response.status(403).json({ error: "Invalid authorization token." });
  },

  async isAdmin(request, response, next) {
    if (request.session.user.user_type !== "Admin") {
      response.status(403).json({ error: "Access denied!" });
    } else {
      next();
    }
  },

  isAdminOrSelf(param_name) {
    return async (request, response, next) => {
      const hasAuthorization =
        request.session.user.user_type === "Admin" ||
        request.params[param_name] == request.session.user.id;

      if (!hasAuthorization) {
        let message = "Access denied";

        if (request.session.user.user_type !== "Admin")
          message += " due to not being the user himself.";

        response.status(403).json({ error: message });
      } else {
        next();
      }
    };
  },
};
