import express from 'express';

const app = express();


// Routing
app.get('/', (req, res) => {
    res.send("Hello World, ts !");
})

export default app;