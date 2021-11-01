import { Response, Request } from "express";
import { validationResult } from "express-validator";
import Person from "../entity/Person";

const findAll = async (_req: Request, res: Response) => {
    const persons = await Person.find();
    res.json(persons);
};

const add = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, number } = req.body;

    const person = await Person.create({ name, number }).save();
    return res.send(person);
};

const findId = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const person = await Person.findOne({ id });

    if (person === undefined) {
        return res.status(404).json({ error: "id not found" });
    }

    return res.send(person);
};

const deleteId = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if ((await Person.findOne({ id })) === undefined) {
        return res.status(404).json({ error: "id not found" });
    }

    await Person.delete({ id });

    return res.status(204).send();
};

const updateId = (_req: Request, res: Response) => {
    res.json({ message: "Hello team!" });
};

export { findAll, add, findId, deleteId, updateId };
