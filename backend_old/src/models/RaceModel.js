const connection = require("../database/connection");

module.exports = {
  async create(race) {
    const result = await connection("races").insert(race);
    return result;
  },
  
  async getById(race_id) {
    const result = await connection("races")
      .where({ race_id })
      .select("*")
      .first();
    return result;
  },

  async updateById(race_id, race) {
    const result = await connection("races").where({ race_id }).update(race);
    return result;
  },
  
  async deleteById(race_id) {
    const result = await connection("races").where({ race_id }).delete();
    return result;
  },
};
