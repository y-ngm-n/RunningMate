const express = require("express");
const UserStorage = require("../models/UserStorage");
const jwt = require("jsonwebtoken");

const { verifyToken } = require("./middlewares");

const router = express.Router();


// 로그인
router.post("/login", async (req, res) => {
    try {
        const user = await UserStorage.findUser(req.body);
        if (!user) {
            return res.json({
                success: false,
                message: "사용자 정보를 찾을 수 없습니다.",
            })
        }
        if (user.password !== req.body.password) {
            return res.json({
                success: false,
                message: "비밀번호가 다릅니다.",
            });
        }
        // 토큰 발급
        const token = jwt.sign({
            email: user.email,
        }, process.env.JWT_SECRET, {
            expiresIn: "30m",
            issuer: "RunningMate",
        });
        return res.json({
            success: true,
            token,
        });
    } catch (err) {
        console.error(err);
        return res.json({
            success: false,
            message: "서버 에러",
        });
    }
});

// 이메일 중복체크
router.post("/register/overlap", async (req, res) => {
    try {
        const result = await UserStorage.isOverlapped(req.body);
        if (!result) { res.json({ success: true }); }
        else {
            res.json({
                success: false,
                message: "이미 존재하는 이메일입니다.",
            });
        }
    } catch (err) {
        console.error(err);
        return res.json({
            success: false,
            message: "서버 에러",
        });
    }
    
});

// 회원가입
router.post("/register", async (req, res) => {
    try {
        await UserStorage.createUser(req.body);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        return res.json({
            success: false,
            message: "서버 에러",
        });
    }
});

// 토큰 테스트
router.get("/test", verifyToken, (req, res) => {
    res.json(req.decoded);
})


module.exports = router;