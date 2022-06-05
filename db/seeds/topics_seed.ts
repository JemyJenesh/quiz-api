import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("topics").del();

  // Inserts seed entries
  await knex("topics").insert([
    { id: 1, name: "Docker" },
    { id: 2, name: "Git" },
    { id: 3, name: "Javascript" },
    { id: 4, name: "Php" },
    { id: 5, name: "React" },
    { id: 6, name: "Vue" },
  ]);
}
