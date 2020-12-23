const connection = require("../database/connection");

module.exports = {
  async create(user) {
    const result = await connection("users").insert(user);
    return result;
  },
  async getById(us_id) {
    const result = await connection("users")
      .where({ us_id })
      .select("*")
      .first();
    return result;
  },
  async updateById(us_id, user) {
    const result = await connection("users").where({ us_id }).update(user);
    return result;
  },
  async deleteById(us_id) {
    const result = await connection("users").where({ us_id }).delete();
    return result;
  },
};
