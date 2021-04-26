import { Response, Request } from "express";

/**
 * Home page
 * @route GET /
 */
export const index = (req: Request, res: Response): void => {
  res.send("Hello world");
};
