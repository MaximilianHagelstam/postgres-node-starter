import { Sequelize } from "sequelize";

export const db = new Sequelize("postgres", "postgres", "no", {
  host: "localhost",
  dialect: "postgres"
});
