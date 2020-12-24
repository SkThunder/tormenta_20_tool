const connection = require("../database/connection");
const { UpdateFunction, CreateFunction } = require("../utils/TimeFunctions");

module.exports = {
  async create(user) {
    user = CreateFunction(user);
    const result = await connection("users").insert(user);
    return result;
  },

  async getById(id) {
    const result = await connection("users").where({ id }).select("*").first();
    return result;
  },

  async getByName(user_name) {
    const result = await connection("users").where({ user_name }).select("*").first();
    return result;
  },

  async updateById(id, user) {
    user = UpdateFunction(user)
    const result = await connection("users").where({ id }).update(user);
    return result;
  },
  
  async deleteById(id) {
    const result = await connection("users").where({ id }).delete();
    return result;
  },
};
