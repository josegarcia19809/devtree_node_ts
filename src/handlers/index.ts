import type {Request, Response} from "express";
// @ts-ignore
import User from "../models/User.ts";

export const createAccount = async (req: Request, res: Response) => {

    const {email} = req.body;
    const userExists = await User.findOne({email});
    if (userExists) {
        const error = new Error("El usuario ya existe");
        return res.status(409).send({error: error.message});
    }

    const user = new User(req.body);
    await user.save();
    res.status(200).send("Registro creado correctamente");
}