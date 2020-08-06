const db = require("./../models/index");


const todos_all = (req, res) => {
    db.Todo.findAll().then(todos => res.send(todos));
};

const todos_one = (req, res) => {
    db.Todo.findAll({
      where: {
        id: req.params.id
      }
    }).then(todo => res.send(todo));
};

const todos_new =  (req, res) => {
    db.Todo.create({
      text: req.body.text
    }).then(submitedTodo => res.send(submitedTodo));
};

const todos_new_bulk_transaction = (req, res) => {
    try {
        db.sequelize.transaction(async (t) => {
            await db.Todo.bulkCreate(req.body, {transaction: t});
        })
        .then(todos => {
            return res.send(todos) 
        })
        .catch(err => { 
            return res.status(409).send(err.parent.sqlMessage) 
        });
    } catch (err) {
        return res.send(err);
    }
};

const todos_delete = (req, res) => {
    db.Todo.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("successfully deleted"));
};

const todos_edit = (req, res) => {
    db.Todo.update({
        text: req.body.text
    }, {
        where: { id: req.body.id }
    }).then(() => res.send("updated"));
}

module.exports = {
    todos_all,
    todos_one,
    todos_new,
    todos_delete,
    todos_edit,
    todos_new_bulk_transaction,
};