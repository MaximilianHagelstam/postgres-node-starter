import { Pool } from "pg";

const DB_PORT: number = parseInt(<string>process.env.DB_PORT) || 5432;

export const pool: Pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: DB_PORT
});
