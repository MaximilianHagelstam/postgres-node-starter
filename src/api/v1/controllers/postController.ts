import { Response, Request } from "express";

export const createPost = (req: Request, res: Response): void => {
  res.json({ message: "Post created" });
};

export const removePost = (req: Request, res: Response): void => {
  res.json({ message: "Post removed" });
};
