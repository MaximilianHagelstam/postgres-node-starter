import express from "express";
import { greeting } from "../controllers/indexController";

const router = express.Router();

router.get("/", greeting);

export default router;
