const db = require("./../models/index");

const todos_all = (req, res) => {
    db.Todo.findAll().then(todos => res.send(todos));
};

module.exports = {
    todos_all
};