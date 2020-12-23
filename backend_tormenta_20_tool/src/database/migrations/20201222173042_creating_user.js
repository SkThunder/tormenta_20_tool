const { onUpdateTrigger } = require('../../../knexfile');

exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("us_id").primary().notNullable();
    table.string("user_name", 60).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
