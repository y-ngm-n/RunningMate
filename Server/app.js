const express = require("express");

const pageRouter = require("./routes/page");
const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", pageRouter);
app.use("/auth", authRouter);

app.listen(3000, (req, res) => {
    console.log("3000번 포트에서 서버가동");
});