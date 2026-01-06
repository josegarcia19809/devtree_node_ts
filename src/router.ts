import {Router} from "express";
// @ts-ignore
import {createAccount} from "./handlers/index.ts";

const router = Router();


// Routing
router.post('/auth/register', createAccount)


export default router;