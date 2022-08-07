const fs = require("fs").promises;

class UserStorage {

    // overlap check
    static isOverlapped(req) {
        return fs.readFile("./databases/user.json")
        .then((data) => {
            const { emails } = JSON.parse(data);
            if (emails.includes(req.email)) { return true; }
            else { return false; }
        })
        .catch((err) => console.error(err));
    }

    // login
    static findUser(req) {
        return fs.readFile("./databases/user.json")
        .then((data) => {
            const { emails, pws } = JSON.parse(data);
            if (emails.includes(req.email)) {
                const idx = emails.indexOf(req.email);
                return { email: req.email, password: pws[idx] };
            }
        })
        .catch((err) => console.error(err));
    }

    // register
    static createUser(req) {
        fs.readFile("./databases/user.json")
        .then((data) => {
            const { emails, pws } = JSON.parse(data);
            emails.push(req.email);
            pws.push(req.password);
            fs.writeFile("./databases/user.json", JSON.stringify({ emails, pws }));
        })
        .catch(console.error);
    }

}

module.exports = UserStorage;