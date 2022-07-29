const fs = require("fs").promises;

module.exports = {
    findUser(data) {
        return fs.readFile("./databases/user.json")
        .then((data) => {
            const { ids, pws } = JSON.parse(data);
            if (ids.includes(data.email)) {
                const idx = ids.indexOf(data.email);
                return { email: data.email, pw: pws[idx] };
            }
        })
        .catch((err) => console.error(err));
    },
}