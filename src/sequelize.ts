import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";

import { dbConfig } from "./config/db";

const { development, test } = dbConfig;
const config = process.env.NODE_ENV === "test" ? test : development;

const sequelize = new Sequelize({
  database: config.database,
  dialect: config.dialect as Dialect,
  username: config.username,
  password: config.password,
  host: config.host,
});

export { sequelize };
