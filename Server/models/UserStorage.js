const db = require("./index");

class UserStorage {

    // overlap check
    static isOverlapped(req) {
        return new Promise((resolve, reject) => {
            const query = "SELECT email FROM users WHERE email = ?;";
            db.query(query, [req.email], (err, data) => {
                resolve(data[0]);
            });
        });
    }

    // login
    static findUser(req) {
        return new Promise((resolve, reject) => {
            const query = "SELECT email, password FROM users WHERE email = ?;";
            db.query(query, [req.email], (err, data) => {
                resolve(data[0]);
            });
        });
    }

    // register
    static createUser(req) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(email, password) VALUES(?, ?);"
            db.query(query, [req.email, req.password], (err, data) => {
                resolve({ success: true });
            })
        })
    }

    static entryGym(email, gymId) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE users SET gym_id = ? WHERE email = ?;";
            db.query(query, [gymId, email], (err, data) => {
                if (err) { reject({ success: false, msg: "헬스장 등록 실패" }); }
                resolve({ success: true });
            });
        });
    }

}

module.exports = UserStorage;