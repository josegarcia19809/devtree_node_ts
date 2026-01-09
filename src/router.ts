import {Router} from "express";
import {body} from "express-validator";
import {createAccount} from "./handlers/index.ts";

const router = Router();


// Routing
router.post('/auth/register',
    body('handle').notEmpty(),
    createAccount)


export default router;