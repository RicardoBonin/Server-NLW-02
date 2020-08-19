import Knex from "knex";
//Criar as coisas
export async function up(knex: Knex) {
  //Criando a tabela
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .timestamp("created_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
  });
}

//Desfazer as coisas
export async function down(knex: Knex) {
  //deleta a tabela
  return knex.schema.dropTable("connections");
}
