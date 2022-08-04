const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");


// setting
const app = express();
const pageRouter = require("./routes/page");
const authRouter = require("./routes/auth");

dotenv.config();
app.set("port", 3000);
app.set("view engine", "ejs");
app.set("views", "./views");


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));


// router
app.use("/", pageRouter);
app.use("/auth", authRouter);


// operate server
app.listen(3000, (req, res) => {
    console.log("3000번 포트에서 서버가동");
});