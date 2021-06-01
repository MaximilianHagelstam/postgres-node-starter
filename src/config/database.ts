import { Sequelize } from "sequelize";

const { DB_NAME } = process.env ?? "postgres";
const { DB_USER } = process.env ?? "postgres";
const { DB_PASSWORD } = process.env;
const { DB_HOST } = process.env ?? "127.0.0.1";
const { DB_PORT } = process.env ?? "5666";

const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

export const db = new Sequelize(URI);
