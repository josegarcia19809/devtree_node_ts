import {Router} from "express";
import User from "./models/User.ts";

const router = Router();


// Routing
router.post('/auth/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send("Registro creado correctamente");
})


export default router;