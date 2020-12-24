const RaceModel = require("../models/RaceModel");

module.exports = {
  async create(request, response) {
    try {
      const race = request.body;

      const result = await RaceModel.create(race);
      return response.status(200).json(result);
    } catch (err) {
      console.log("Race creation failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to create Race",
      });
    }
  },

  async getById(request, response) {
    try {
      const { race_id } = request.params;

      const result = await Race.getById(race_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log("Race getById failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to get Race",
      });
    }
  },

  async update(request, response) {
    try {
      const { race_id } = request.params;
      const race = request.body;

      const result = await RaceModel.updateById(race_id, race);
      return response.status(200).json(result);
    } catch (err) {
      console.log("Race update failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to update Race",
      });
    }
  },
  
  async delete(request, response) {
    try {
      const { race_id } = request.params;

      const result = await RaceModel.deleteById(race_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log("Race delete failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to delete Race",
      });
    }
  },
};
