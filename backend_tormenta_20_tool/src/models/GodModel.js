const connection = require("../database/connection");

module.exports = {
  async create(god) {
    const result = await connection("gods").insert(god);
    return result;
  },

  async getById(god_id) {
    const result = await connection("gods")
      .where({ god_id })
      .select("*")
      .first();
    return result;
  },

  async updateById(god_id, god) {
    const result = await connection("gods").where({ god_id }).update(god);
    return result;
  },

  async deleteById(god_id) {
    const result = await connection("gods").where({ god_id }).delete();
    return result;
  },
};
