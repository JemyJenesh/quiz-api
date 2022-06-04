import dotenv from "dotenv";

dotenv.config();

export const appConfig = {
  appName: process.env.APP_NAME,
  appDate: process.env.APP_DATE,
  port: process.env.PORT,
};
