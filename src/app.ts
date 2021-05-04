import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Controllers
import * as homeController from "./controllers/home";

const app = express();

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

/**
 * API routes.
 */

export { app };
