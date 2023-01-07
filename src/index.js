const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>I'm alive dad</h2>");
});

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});