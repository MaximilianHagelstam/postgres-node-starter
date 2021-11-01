import express from "express";
import { body } from "express-validator";
import * as personController from "../controllers/personController";

const personRouter = express.Router();

personRouter.get("/", personController.findAll);
personRouter.post("/", body("name").isString(), body("number").isString(), personController.add);
personRouter.get("/:id", personController.findId);
personRouter.delete("/:id", personController.deleteId);
personRouter.put("/:id", body("name").isString(), body("number").isString(), personController.updateId);

export default personRouter;
