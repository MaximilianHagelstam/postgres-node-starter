import express from "express";
import { createPost, getPosts } from "../controllers";

export const postRouter = express.Router();

postRouter.get("/create-post", createPost);
postRouter.get("/get-posts", getPosts);
