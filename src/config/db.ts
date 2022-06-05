import dotenv from "dotenv";

dotenv.config();

export const dbConfig = {
  development: {
    client: process.env.DB_CLIENT,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
  },
  test: {
    client: process.env.TEST_DB_CLIENT,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOST,
    password: process.env.TEST_DB_PASSWORD,
    port: process.env.TEST_DB_PORT,
    username: process.env.TEST_DB_USERNAME,
  },
};
