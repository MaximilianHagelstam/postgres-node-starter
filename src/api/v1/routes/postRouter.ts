import express from "express";
import { createPost, removePost } from "../controllers";

export const postRouter = express.Router();

postRouter.get("/create-post", createPost);
postRouter.get("/remove-post", removePost);
