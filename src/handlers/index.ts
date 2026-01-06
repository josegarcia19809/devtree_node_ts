import type {Request, Response} from "express";
// @ts-ignore
import User from "../models/User.ts";

export const createAccount = async (req: Request, res: Response) => {
    const user = new User(req.body);
    await user.save();
    res.send("Registro creado correctamente");
}