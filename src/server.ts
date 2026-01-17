import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import router from './router.ts';
import {connectDB} from "./config/db.ts";
import {corsConfig} from "./config/cors.ts";

const app = express();
connectDB()

// Cors
app.use(cors(corsConfig));

// Leer datos de un formulario
app.use(express.json());

app.use("/", router);

export default app;