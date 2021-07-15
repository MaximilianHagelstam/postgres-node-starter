import { Response, Request } from "express";
import logger from "../config/logger";
import { Post } from "../models/Post";

export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    interface IPost {
      message: string;
    }

    const post: IPost = {
      message: req.body.message
    };

    const newPost = await Post.create(post);
    logger.debug(newPost);
    res.json(newPost);
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
