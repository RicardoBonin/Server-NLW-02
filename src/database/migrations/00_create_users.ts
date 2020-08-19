import Knex from "knex";
//Criar as coisas
export async function up(knex: Knex) {
  //Criando a tabela
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}

//Desfazer as coisas
export async function down(knex: Knex) {
  //deleta a tabela
  return knex.schema.dropTable("users");
}
