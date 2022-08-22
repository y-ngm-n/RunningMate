const db = require("./index");

class GymStorage {

    static isExisting(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT id FROM gyms WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                resolve(data[0]);
            });
        });
    }

    static findGym(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM gyms WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                resolve(data[0]);
            });
        });
    }

    static createGym(req) {
        return new Promise((resolve, reject) => {
            console.log(req);
            const query = "INSERT INTO gyms(id, name) VALUES(?, ?);"
            db.query(query, [req.gymId, req.gymName], (err, data) => {
                if (err) { reject(err); }
                resolve({ success: true });
            });
        });
    }

}

module.exports = GymStorage;