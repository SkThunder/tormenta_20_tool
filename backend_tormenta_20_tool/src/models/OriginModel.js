const connection = require("../database/connection");

module.exports = {
  async create(origin) {
    const result = await connection("origins").insert(origin);
    return result;
  },

  async getById(origin_id) {
    const result = await connection("origins")
      .where({ origin_id })
      .select("*")
      .first();
    return result;
  },

  async updateById(origin_id, origin) {
    const result = await connection("origins")
      .where({ origin_id })
      .update(origin);
    return result;
  },
  
  async deleteById(origin_id) {
    const result = await connection("origins").where({ origin_id }).delete();
    return result;
  },
};
