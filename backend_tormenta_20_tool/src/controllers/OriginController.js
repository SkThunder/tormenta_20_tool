const OriginModel = require("../models/OriginModel");

module.exports = {
  async create(request, response) {
    try {
      const origin = request.body;
      
      const result = await OriginModel.create(origin);
      return response.status(200).json(result);
    } catch (err) {
      console.log("Origin creation failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to create Origin",
      });
    }
  },

  async getById(request, response) {
    try {
      const { origin_id } = request.params;

      const result = await Origin.getById(origin_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log("Origin getById failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to get Origin",
      });
    }
  },

  async update(request, response) {
    try {
      const { origin_id } = request.params;
      const origin = request.body;

      const result = await OriginModel.updateById(origin_id, origin);
      return response.status(200).json(result);
    } catch (err) {
      console.log("Origin update failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to update Origin",
      });
    }
  },

  async delete(request, response) {
    try {
      const { origin_id } = request.params;

      const result = await OriginModel.deleteById(origin_id);
      return response.status(200).json(result);
    } catch (err) {
      console.log("Origin delete failed: " + err);
      return response.status(500).json({
        notification: "Internal server error while trying to delete Origin",
      });
    }
  },
};
