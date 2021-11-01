import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const DB_URI = process.env.NODE_ENV === "production" ? process.env.DB_URI_PROD : process.env.DB_URI_DEV;

export { PORT, DB_URI };
