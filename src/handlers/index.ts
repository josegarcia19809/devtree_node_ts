import type {Request, Response} from "express";
import User from "../models/User.ts";
import {hashPassword} from '../utils/auth.ts';

export const createAccount = async (req: Request, res: Response) => {

    const {email, password} = req.body;
    const userExists = await User.findOne({email});
    if (userExists) {
        const error = new Error("El usuario ya existe");
        return res.status(409).send({error: error.message});
    }

    const user = new User(req.body);
    user.password = await hashPassword(password);
    await user.save();
    res.status(200).send("Registro creado correctamente");
}