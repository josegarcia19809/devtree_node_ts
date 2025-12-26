import express from 'express';
// @ts-ignore
import router from './router.ts';

const app = express();

app.use("/", router);

export default app;