import { Request, Response } from "express";

/**
 * Home page
 * @route GET /
 */
const index = (req: Request, res: Response): void => {
  res.send("home");
};

export { index };
