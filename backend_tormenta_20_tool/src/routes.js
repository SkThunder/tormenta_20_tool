const express = require("express");
const routes = express.Router();

const UserValidator = require("./validators/UserValidator");
const UserController = require("./controllers/UserController");
const { generateId } = require("./middlewares/IdGenerator");

//Users
routes.post("/user", UserValidator.create, generateId("id"), UserController.create);
routes.get("/user/:id", UserValidator.getById, UserController.getById);
routes.put("/user/:id", UserValidator.update, UserController.update);
routes.delete("/user/:id", UserValidator.delete, UserController.delete);

routes.get("/test", (request, response) => {
  try {
    return response.status(200).json({ notification: "Hello world!" });
  } catch (error) {
    console.warn(error);
    return response.status(400).json({ notification: error.message });
  }
});

module.exports = routes;
