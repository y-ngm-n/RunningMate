const express = require("express");


const router = express.Router();


router.post("/login", (req, res) => {
    console.log(req.body.email);
    res.send(req.body.email);
});

router.post("/register", (req, res) => {
    console.log(req.body.email);
    
})


module.exports = router;