const express = require("express");
const routes = express.Router();

const UserValidator = require("./validators/UserValidator");
const UserController = require("./controllers/UserController");
const { generateId } = require("./middlewares/IdGenerator");

//Users
routes.post("/user", UserValidator.create, generateId("us_id"), UserController.create);
routes.get("/user/:us_id", UserValidator.getById, UserController.getById);
routes.put("/user/:us_id", UserValidator.update, UserController.update);
routes.delete("/user/:us_id", UserValidator.delete, UserController.delete);

routes.get("/test", (request, response) => {
  try {
    return response.status(200).json({ notification: "Hello world!" });
  } catch (error) {
    console.warn(error);
    return response.status(400).json({ notification: error.message });
  }
});

module.exports = routes;
