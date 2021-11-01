import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const DB_NAME = process.env.NODE_ENV === "production" ? process.env.DB_NAME_PROD : process.env.DB_NAME_DEV;
const DB_PASSWORD = process.env.DB_PASSWORD;

export { PORT, DB_NAME, DB_PASSWORD };
