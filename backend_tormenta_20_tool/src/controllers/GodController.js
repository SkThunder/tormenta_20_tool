const GodModel = require("../models/GodModel");

module.exports = {
  async create(request, response) {
    try {
      const god = request.body;

      const result = await GodModel.create(god);
      return response.status(200).json(result);
    } catch (err) {
      console.log("God creation failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to create God",
      });
    }
  },

  async getById(request, response) {
    try {
      const { god_id } = request.params;
      const result = await God.getById(god_id);

      return response.status(200).json(result);
    } catch (err) {
      console.log("God getById failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to get God",
      });
    }
  },

  async update(request, response) {
    try {
      const { god_id } = request.params;
      const god = request.body;
      const result = await GodModel.updateById(god_id, god);

      return response.status(200).json(result);
    } catch (err) {
      console.log("God update failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to update God",
      });
    }
  },

  async delete(request, response) {
    try {
      const { god_id } = request.params;

      const result = await GodModel.deleteById(god_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log("God delete failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to delete God",
      });
    }
  },
};
