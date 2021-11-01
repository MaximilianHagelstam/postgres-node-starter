import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const DB_HOST = process.env.NODE_ENV === "production" ? process.env.DB_HOST_PROD : process.env.DB_HOST_DEV;
const DB_PORT =
    process.env.NODE_ENV === "production"
        ? parseInt(<string>process.env.DB_PORT_PROD)
        : parseInt(<string>process.env.DB_PORT_DEV);
const DB_NAME = process.env.NODE_ENV === "production" ? process.env.DB_NAME_PROD : process.env.DB_NAME_DEV;
const DB_PASSWORD = process.env.NODE_ENV === "production" ? process.env.DB_PASSWORD_PROD : process.env.DB_PASSWORD_DEV;
const DB_USERNAME = process.env.NODE_ENV === "production" ? process.env.DB_USERNAME_PROD : process.env.DB_USERNAME_DEV;

export { PORT, DB_HOST, DB_PORT, DB_NAME, DB_PASSWORD, DB_USERNAME };
