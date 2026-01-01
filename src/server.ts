import express from 'express';
import 'dotenv/config';

// @ts-ignore
import router from './router.ts';
// @ts-ignore
import {connectDB} from "./config/db.ts";

const app = express();
connectDB()

// Leer datos de un formulario
app.use(express.json());

app.use("/", router);

export default app;