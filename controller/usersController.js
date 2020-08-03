const db = require("./../models/index");

const all_users = (req, res) => {
    db.User.findAll().then(user => res.send(user));
}

const find_user = (req,res) => {
    db.User.findOne({
        where: {
           id: req.params.id
        }
    }).then((user) => res.send(user));
};

const new_user = (req, res) => {
    db.User.create({
        username: req.body.username,
        password: req.body.password,
    }).then(newUser => res.send(newUser));
};

const edit_user = (req, res) => {
    db.User.update({
        password: req.body.password
    }, {
        where: { id: req.body.id }
    }).then(() =>  res.send("sucessfully updated"));
};

const delete_user = (req, res) => {
    db.User.delete({
        where: {
            id: req.params.id
        }
    }).then();
};

module.exports = {
    all_users,
    find_user,
    new_user,
    edit_user,
    delete_user,
};