import type {Request, Response} from "express";
import {validationResult} from "express-validator";
import slug from "slug";
import User from "../models/User.ts";
import {checkPassword, hashPassword} from '../utils/auth.ts';
import {generateJWT} from "../utils/jwt.ts";

export const createAccount = async (req: Request, res: Response) => {

    // Manejar errores
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    const userExists = await User.findOne({email});
    if (userExists) {
        const error = new Error("Un usuario con ese email ya existe");
        return res.status(409).send({error: error.message});
    }
    const handle = slug(req.body.handle, '');
    const handleExists = await User.findOne({handle});
    if (handleExists) {
        const error = new Error("Nombre de usuario no disponible");
        return res.status(409).send({error: error.message});
    }

    const user = new User(req.body);
    user.password = await hashPassword(password);
    user.handle = handle;
    await user.save();
    res.status(200).send("Registro creado correctamente");
}

export const login = async (req: Request, res: Response) => {


    // Revisar si el usuario está registrado
    const {email, password} = req.body;
    const userExists = await User.findOne({email});

    if (!userExists) {
        const error = new Error("Ese usuario no existe");
        return res.status(404).send({error: error.message});
    }

    // Comprobar el password
    const isPasswordCorrect = await checkPassword(password, userExists.password);
    if (!isPasswordCorrect) {
        const error = new Error("Password incorrecto");
        return res.status(404).send({error: error.message});
    }

    const token = generateJWT({id: userExists._id.toString()})
    res.send("Autenticado correctamente: " + token);
}