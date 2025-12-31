import express from 'express';
// @ts-ignore
import router from './router.ts';

const app = express();

// Leer datos de un formulario
app.use(express.json());

app.use("/", router);

export default app;