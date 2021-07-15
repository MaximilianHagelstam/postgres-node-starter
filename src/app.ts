import dotenv from "dotenv";
dotenv.config();
import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import logger from "./config/logger";
import { db } from "./config/database";

// Routers
import { postRouter } from "./routes";

// Test db connection
db.authenticate()
  .then(() => {
    logger.info("Connected to db");
  })
  .catch((err) => {
    logger.error(err);
  });

const app = express();

// Configure express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configure swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TS Node Starter API",
      version: "1.0.0",
      description: "TypeScript API boilerplate",
      contact: {
        name: "Maximilian Hagelstam",
        email: "maximilian.hagelstam@gmail.com"
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT"
      }
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Local server"
      }
    ]
  },
  apis: ["./src/api/v0/routes/*.js"]
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Routes
app.use("/post", postRouter);

export { app };
