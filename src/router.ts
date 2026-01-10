import {Router} from "express";
import {body} from "express-validator";
import {createAccount, login} from "./handlers/index.ts";
import {handleInputErrors} from "./middleware/validation.ts";

const router = Router();


// Routing
router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacío'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede ir vacío'),
    body('password')
        .isLength({min: 8})
        .withMessage('El password es muy corto, mínimo 8 caracteres'),
    body('email')
        .isEmail()
        .withMessage('email no válido'),
    handleInputErrors,
    createAccount)

router.post('/auth/login',
    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio'),
    body('email')
        .isEmail()
        .withMessage('email no válido'),
    handleInputErrors,
    login)

export default router;