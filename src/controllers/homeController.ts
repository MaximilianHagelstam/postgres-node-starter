import { Response, Request } from "express";

/**
 * Home page
 * @route GET /
 */
export const sendHello = (req: Request, res: Response): void => {
  res.send("Hello world");
};
