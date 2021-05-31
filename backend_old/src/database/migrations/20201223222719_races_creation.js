exports.up = function (knex) {
  return knex.schema.createTable("races", function (table) {
    table.uuid("id").primary().comment("Id da Raça").notNullable();
    table.string("race_name", 60).comment("Nome da Raça").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("races");
};
