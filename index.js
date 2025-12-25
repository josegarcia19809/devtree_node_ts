const express = require('express');
const app = express();


// Routing
app.get('/', (req, res) => {
    res.send("Hello World!");
})
app.listen(4000, () => {
    console.log("server is running on port " + 4000);
})