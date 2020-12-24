exports.up = function (knex) {
  return knex.schema.createTable("gods", function (table) {
    table.uuid("id").primary().comment("Id da Divindade").notNullable();
    table.string("god_name", 60).comment("Nome da Divindade").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("gods");
};
