exports.up = function (knex) {
  return knex.schema.createTable("characters", function (table) {
    table.uuid("id").primary().comment("Id do Personagem").notNullable();
    table.uuid("player_id").comment("Jogador do Personagem").notNullable();
    table.foreign("player_id").references("id").inTable("users");
    table
      .string("character_name", 60)
      .comment("Nome do personagem")
      .notNullable();
    table
      .integer("character_total_level")
      .comment("Nível do personagem")
      .defaultTo(1)
      .notNullable();
    table.uuid("origin_id").comment("Origem do personagem").nullable();
    table.foreign("origin_id").references("id").inTable("origins");
    table.uuid("race_id").comment("Raça do personagem").nullable();
    table.foreign("race_id").references("id").inTable("races");
    table.uuid("devotee_id").comment("Divindade do personagem").nullable();
    table.foreign("devotee_id").references("id").inTable("gods");
    table
      .integer("base_strength")
      .comment("Força base do personagem")
      .defaultTo(10)
      .notNullable();
    table
      .integer("base_dexterity")
      .comment("Destreza base do personagem")
      .defaultTo(10)
      .notNullable();
    table
      .integer("base_constitution")
      .comment("Constituição base do personagem")
      .defaultTo(10)
      .notNullable();
    table
      .integer("base_inteligence")
      .comment("Inteligência base do personagem")
      .defaultTo(10)
      .notNullable();
    table
      .integer("base_wisdom")
      .comment("Sabedoria base do personagem")
      .defaultTo(10)
      .notNullable();
    table
      .integer("base_charisma")
      .comment("Carisma base do personagem")
      .defaultTo(10)
      .notNullable();
    table
      .integer("base_health_points")
      .comment("Pontos de vida base do personagem")
      .defaultTo(0);
    table
      .integer("base_mana_points")
      .comment("Pontos de mana base do personagem")
      .defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("characters");
};
