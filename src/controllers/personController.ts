import { Response, Request } from "express";

const findAll = (_req: Request, res: Response) => {
    res.json({ message: "Hello team!" });
};

const add = (_req: Request, res: Response) => {
    res.json({ message: "Hello team!" });
};

const findId = (_req: Request, res: Response) => {
    res.json({ message: "Hello team!" });
};

const deleteId = (_req: Request, res: Response) => {
    res.json({ message: "Hello team!" });
};

const updateId = (_req: Request, res: Response) => {
    res.json({ message: "Hello team!" });
};

export { findAll, add, findId, deleteId, updateId };
