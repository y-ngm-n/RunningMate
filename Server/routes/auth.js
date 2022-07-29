const express = require("express");
const UserStorage = require("../models/UserStorage");


const router = express.Router();


router.post("/login", (req, res) => {
    console.log(req.body);
    const user = UserStorage.findUser(req.body);
});

router.post("/register", (req, res) => {
    console.log(req.body);
    const user = UserStorage.findUser(req.body);
})


module.exports = router;