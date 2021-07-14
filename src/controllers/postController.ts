import { Response, Request } from "express";
import { Post } from "../models/Post";

export const createPost = (req: Request, res: Response): void => {
  res.json({ message: "Post created" });
};

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  const posts = await Post.findAll();
  res.json(posts);
};
