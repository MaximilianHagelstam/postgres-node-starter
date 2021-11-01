import express from "express";
import * as personController from "../controllers/personController";

const personRouter = express.Router();

personRouter.get("/", personController.findAll);
personRouter.post("/", personController.add);
personRouter.get("/:id", personController.findId);
personRouter.delete("/:id", personController.deleteId);
personRouter.patch("/:id", personController.updateId);

export default personRouter;
