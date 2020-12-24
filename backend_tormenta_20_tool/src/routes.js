const express = require("express");
const routes = express.Router();

const UserValidator = require("./validators/UserValidator");
const UserController = require("./controllers/UserController");

const RaceValidator = require("./validators/RaceValidator");
const RaceController = require("./controllers/RaceController");

const OriginController = require("./controllers/OriginController");
const OriginValidator = require("./validators/OriginValidator");

const GodValidator = require("./validators/GodValidator");
const GodController = require("./controllers/GodController");

const { generateId } = require("./middlewares/IdGenerator");

//Users
routes.post("/user", UserValidator.create, generateId, UserController.create);
routes.get("/user/:user_id", UserValidator.getById, UserController.getById);
routes.put("/user/:user_id", UserValidator.update, UserController.update);
routes.delete("/user/:user_id", UserValidator.delete, UserController.delete);

//Races
routes.post("/race", RaceValidator.create, generateId, RaceController.create);
routes.get("/race/:race_id", RaceValidator.getById, RaceController.getById);
routes.put("/race/:race_id", RaceValidator.update, RaceController.update);
routes.delete("/race/:race_id", RaceValidator.delete, RaceController.delete);

//Origins
routes.post("/origin", OriginValidator.create, generateId, OriginController.create);
routes.get("/origin/:origin_id", OriginValidator.getById, OriginController.getById);
routes.put("/origin/:origin_id", OriginValidator.update, OriginController.update);
routes.delete("/origin/:origin_id", OriginValidator.delete, OriginController.delete);

//Gods
routes.post('/god', GodValidator.create, generateId, GodController.create);
routes.get('/god/:god_id', GodValidator.getById, GodController.getById);
routes.put('/god/:god_id', GodValidator.update, GodController.update);
routes.delete('/god/:god_id', GodValidator.delete, GodController.delete);

routes.get("/test", (request, response) => {
  try {
    return response.status(200).json({ notification: "Hello world!" });
  } catch (error) {
    console.warn(error);
    return response.status(400).json({ notification: error.message });
  }
});

module.exports = routes;
