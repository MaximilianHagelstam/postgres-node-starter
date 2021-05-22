import { Sequelize } from "sequelize";

const { DB_NAME } = process.env ?? "postgres";
const { DB_USER } = process.env;
const { DB_PASSWORD } = process.env;
const { DB_HOST } = process.env;

export const db = new Sequelize(
  DB_NAME ?? "postgres",
  DB_USER ?? "postgres",
  DB_PASSWORD ?? "password",
  {
    host: DB_HOST ?? "localhost",
    dialect: "postgres"
  }
);
