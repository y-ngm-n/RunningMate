const express = require("express");
const UserStorage = require("../models/UserStorage");


const router = express.Router();


router.post("/login", async (req, res) => {
    console.log(req.body);
    const user = await UserStorage.findUser(req.body);
    console.log(user);
});

router.post("/register", async (req, res) => {
    console.log(req.body);
    const user = await UserStorage.findUser(req.body);
    console.log(user);
})


module.exports = router;