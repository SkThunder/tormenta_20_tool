exports.up = function (knex) {
  return knex.schema.createTable("origins", function (table) {
    table.uuid("id").primary().comment("Id da Origem").notNullable();
    table.string("origin_name", 60).comment("Nome da Origem").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("origins");
};
