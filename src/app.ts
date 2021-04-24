import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db";

// Controllers
import * as homeController from "./controllers/home";

const app = express();

connectDB();

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

export { app };
