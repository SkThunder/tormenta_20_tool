const express = require("express");
const routes = express.Router();

const SessionValidator = require("./validators/SessionValidator");
const SessionController = require("./controllers/SessionController");

const UserValidator = require("./validators/UserValidator");
const UserController = require("./controllers/UserController");

const RaceValidator = require("./validators/RaceValidator");
const RaceController = require("./controllers/RaceController");

const OriginController = require("./controllers/OriginController");
const OriginValidator = require("./validators/OriginValidator");

const GodValidator = require("./validators/GodValidator");
const GodController = require("./controllers/GodController");

const { generateId } = require("./middlewares/IdGenerator");
const { authenticateToken, isAdmin, isAdminOrSelf } = require("./middlewares/authentication");

//Session
routes.post('/login', SessionValidator.login, SessionController.login);
routes.get('/verify', SessionValidator.verify, SessionController.verify);

//Users
routes.post("/user", UserValidator.create, generateId, UserController.create);
routes.get("/user/:user_id", UserValidator.getById, authenticateToken, isAdminOrSelf("user_id"), UserController.getById);
routes.put("/user/:user_id", UserValidator.update,  authenticateToken, isAdminOrSelf("user_id"), UserController.update);
routes.delete("/user/:user_id", UserValidator.delete,  authenticateToken, isAdminOrSelf("user_id"), UserController.delete);

//Races
routes.post("/race", RaceValidator.create, authenticateToken, isAdmin, generateId, RaceController.create);
routes.get("/race/:race_id", RaceValidator.getById, RaceController.getById);
routes.put("/race/:race_id", RaceValidator.update, authenticateToken, isAdmin, RaceController.update);
routes.delete("/race/:race_id", RaceValidator.delete, authenticateToken, isAdmin, RaceController.delete);

//Origins
routes.post("/origin", OriginValidator.create, authenticateToken, isAdmin, generateId, OriginController.create);
routes.get("/origin/:origin_id", OriginValidator.getById, OriginController.getById);
routes.put("/origin/:origin_id", OriginValidator.update, authenticateToken, isAdmin, OriginController.update);
routes.delete("/origin/:origin_id", OriginValidator.delete, authenticateToken, isAdmin, OriginController.delete);

//Gods
routes.post('/god', GodValidator.create, generateId, authenticateToken, isAdmin, GodController.create);
routes.get('/god/:god_id', GodValidator.getById, GodController.getById);
routes.put('/god/:god_id', GodValidator.update, authenticateToken, isAdmin, GodController.update);
routes.delete('/god/:god_id', GodValidator.delete, authenticateToken, isAdmin, GodController.delete);

routes.get("/test", (request, response) => {
  try {
    return response.status(200).json({ notification: "Hello world!" });
  } catch (error) {
    console.warn(error);
    return response.status(400).json({ notification: error.message });
  }
});

module.exports = routes;
