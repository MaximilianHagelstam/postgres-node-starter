import { Response } from "express";

/**
 * Home page
 * @route GET /
 */
export const index = (res: Response): void => {
  res.send("Hello world");
};
