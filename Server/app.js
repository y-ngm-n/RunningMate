const express = require("express");

const pageRouter = require("./routes/page");
const authRouter = require("./routes/auth");

const app = express();

app.get("/", (req, res) => {
    res.send("ang");
});

app.listen(3000, (req, res) => {
    console.log("3000번 포트에서 서버가동");
});