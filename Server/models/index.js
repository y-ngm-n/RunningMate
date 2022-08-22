const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
    host: "running-mate.c15jmsr9v6x6.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: process.env.DB_SECRET,
    database: "runningmate"
});

db.connect();

module.exports = db;