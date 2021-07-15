import { Response, Request } from "express";
import logger from "src/config/logger";
import { Post } from "../models/Post";

export const createPost = async (req: Request): Promise<void> => {
  try {
    const newPost = await Post.create(req.body);
    logger.debug(newPost);
  } catch (err) {
    logger.error(err);
  }
};

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await Post.findAll();
    logger.debug(posts);
    res.json(posts);
  } catch (err) {
    logger.error(err);
  }
};
