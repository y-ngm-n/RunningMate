const fs = require("fs").promises;

class UserStorage {

    static findUser(user) {
        return fs.readFile("./databases/user.json")
        .then((data) => {
            const { emails, pws } = JSON.parse(data);
            if (emails.includes(user.email)) {
                const idx = emails.indexOf(user.email);
                return { email: user.email, pw: pws[idx] };
            }
        })
        .catch((err) => console.error(err));
    }
}

module.exports = UserStorage;