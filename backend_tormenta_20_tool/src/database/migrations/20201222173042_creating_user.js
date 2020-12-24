exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").primary().comment("Id do usuario").notNullable();
    table.string("user_name", 60).comment("Nome do usuario").notNullable();
    table
      .string("image_url", 100)
      .comment("Link para foto de perfil do usuario")
      .defaultTo(
        "https://i.pinimg.com/564x/ae/5c/47/ae5c47d4a6ac53b79dc88d763b4c8095.jpg"
      )
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
