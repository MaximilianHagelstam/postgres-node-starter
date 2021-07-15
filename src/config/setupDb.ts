import dotenv from "dotenv";
dotenv.config();
import { Client } from "pg";
import logger from "./logger";

const { PG_DATABASE, PG_USERNAME, PG_PASSWORD, PG_HOST, PG_PORT } = process.env;

const client = new Client({
  user: PG_USERNAME,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: parseInt(<string>PG_PORT)
});

client.connect();

const query = `
CREATE TABLE posts (
  id serial PRIMARY KEY,
  message text NOT NULL
);
`;

client
  .query(query)
  .then(() => {
    logger.info("Tables successfully created");
  })
  .catch((err) => {
    logger.error(err);
  })
  .finally(() => {
    client.end();
  });
