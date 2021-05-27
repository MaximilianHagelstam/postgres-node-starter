import express from "express";
import { sendHello } from "../controllers";

export const homeRouter = express.Router();

homeRouter.get("/", sendHello);
