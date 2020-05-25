const express = require('express');

const app = express();

app.get('/date', (req, res) => {
    res.send({ date: new Date().toJSON().slice(0, 10) }).status(200);
});

app.listen(3000);
module.exports = { app };
