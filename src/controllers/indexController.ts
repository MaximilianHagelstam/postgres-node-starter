import { Response, Request } from "express";

export const greeting = (_req: Request, res: Response) => {
    res.json({ message: "Hello team!" });
};
