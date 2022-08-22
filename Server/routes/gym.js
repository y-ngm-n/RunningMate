const express = require("express");
const { verifyToken } = require("./middlewares");
const db = require("../models");
const UserStorage = require("../models/UserStorage");
const GymStorage = require("../models/GymStorage");

const router = express.Router();

// 헬스장 등록
router.post("/entry", verifyToken, async (req, res) => {
    const user = req.decoded;

    // 존재하는 gym 데이터인지 확인
    const gymReadResult = await GymStorage.isExisting(req.body.gymId);

    // 존재하지 않을 경우 gym 데이터 추가
    if (!gymReadResult) {
        const gymCreateResult = await GymStorage.createGym(req.body);
        if (!gymCreateResult.success) { console.log("fail to ceate"); }
    }

    // user의 column에 gym_id 추가
    const gymEntryResult = await UserStorage.entryGym(user.email, req.body.gymId);
    if (gymEntryResult.success) {
        res.json({ success: true });
    } else {
        res.json({
            success: false,
            message: gymEntryResult.message
        });
    }
});


module.exports = router;