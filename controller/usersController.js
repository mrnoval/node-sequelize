const db = require("./../models/index");

const all_users = (req, res) => {
    db.User.findAll().then(user => res.send(user));
}

module.exports = {
    all_users
};