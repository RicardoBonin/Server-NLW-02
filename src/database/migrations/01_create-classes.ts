import Knex from "knex";
//Criar as coisas
export async function up(knex: Knex) {
  //Criando a tabela
  return knex.schema.createTable("classes", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

//Desfazer as coisas
export async function down(knex: Knex) {
  //deleta a tabela
  return knex.schema.dropTable("classes");
}
