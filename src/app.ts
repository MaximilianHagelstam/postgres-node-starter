import dotenv from "dotenv";
dotenv.config();
import express from "express";
import logger from "./config/logger";
import { db } from "./config/database";

// Controllers
import { homeRouter } from "./routes";

// Test db connection
db.authenticate()
  .then(() => {
    logger.info("Connected to db");
  })
  .catch((err) => {
    logger.error(`Error connecting to db: ${err}`);
  });

const app = express();

// Configure express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/", homeRouter);

export { app };
