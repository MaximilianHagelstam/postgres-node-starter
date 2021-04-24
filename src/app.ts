import express from "express";
import dotenv from "dotenv";

import * as homeController from "./controllers/home";

dotenv.config();

const app = express();

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

export { app };
