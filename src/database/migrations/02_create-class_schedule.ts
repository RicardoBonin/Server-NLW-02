import Knex from "knex";
//Criar as coisas
export async function up(knex: Knex) {
  //Criando a tabela
  return knex.schema.createTable("class_schedule", (table) => {
    table.increments("id").primary();

    table.integer("week_day").notNullable();
    table.integer("from").notNullable();
    table.integer("to").notNullable();

    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

//Desfazer as coisas
export async function down(knex: Knex) {
  //deleta a tabela
  return knex.schema.dropTable("class_schedule");
}
