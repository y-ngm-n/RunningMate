const express = require("express");
const UserStorage = require("../models/UserStorage");


const router = express.Router();


router.post("/login", (req, res) => {
    console.log(req.body);
    const user = UserStorage.findUser(req.body);
    console.log(user);
});

router.post("/register", (req, res) => {
    console.log(req.body);
    const user = UserStorage.findUser(req.body);
    console.log(user);
})


module.exports = router;