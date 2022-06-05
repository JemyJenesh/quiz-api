import { default as Knex } from "knex";

import { dbConfig } from "./config";

const config =
  process.env.NODE_ENV === "test" ? dbConfig.test : dbConfig.development;

export const knex = Knex({
  client: config.client || "mysql",
  version: "2.18.1",
  connection: {
    host: config.host,
    port: config.port ? +config.port : 3306,
    user: config.username,
    password: config.password,
    database: config.database,
  },
});
