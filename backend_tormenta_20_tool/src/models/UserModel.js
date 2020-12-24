const connection = require("../database/connection");

module.exports = {
  async create(user) {
    const result = await connection("users").insert(user);
    return result;
  },

  async getById(id) {
    const result = await connection("users").where({ id }).select("*").first();
    return result;
  },

  async updateById(id, user) {
    const result = await connection("users").where({ id }).update(user);
    return result;
  },
  
  async deleteById(id) {
    const result = await connection("users").where({ id }).delete();
    return result;
  },
};
