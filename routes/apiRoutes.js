const express = require("express");
const router = express.Router();
const db = require("../models/index");
const todosController = require("./../controller/todosController");
// const usersController = require("./../control.er/userController");

// get all todos
router.get("/all", todosController.todos_all);

// get single todo by id
router.get("/find/:id", (req, res) => {
    db.Todo.findAll({
      where: {
        id: req.params.id
      }
    }).then(todo => res.send(todo));
});

// post new todo
router.post("/new", (req, res) => {
    db.Todo.create({
      text: req.body.text
    }).then(submitedTodo => res.send(submitedTodo));
});

// delete todo
router.delete("/delete/:id", (req, res) => {
    db.Todo.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("successfully deleted"));
});

// edit a todo
router.put("/edit", (req, res) => {
    db.Todo.update({
        text: req.body.text
    }, {
        where: { id: req.body.id }
    }).then(() => res.send("updated"));
});


router.get("/users", (req, res) => {
    db.User.findAll().
        then(users => res.send(users));
});

router.get("/users/:id", (req,res) => {
    db.User.findOne({
        where: {
           id: req.params.id
        }
    }).then((user) => res.send(user));
});

router.post("/users", (req, res) => {
    db.User.create({
        username: req.body.username,
        password: req.body.password,
    }).then(newUser => res.send(newUser));
});

router.put("/users", (req, res) => {
    db.User.update({
        password: req.body.password
    }, {
        where: { id: req.body.id }
    }).then(() =>  res.send("sucessfully updated"));
});

router.delete("/users/:id", (req, res) => {
    db.User.delete({
        where: {
            id: req.params.id
        }
    }).then();
});

module.exports = router;

