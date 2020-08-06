const express = require("express");
const router = express.Router();
const db = require("../models/index");
const todosController = require("./../controller/todosController");
const usersController = require("./../controller/usersController");

// To-dos

/**
 * @swagger
 * /api/all:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/all", todosController.todos_all);

/**
 * @swagger
 * /api/find/:id:
 *  get:
 *    description: Use to request all customers
 *    parameters: 
 *      - name: id
 *        description: id of todo
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/find/:id", todosController.todos_one);

/**
 * @swagger
 * /api/new:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/new", todosController.todos_new);

router.post("/new_bulk_transaction", todosController.todos_new_bulk_transaction);

// router.post("/new_transaction", todosController.todos_transaction_new);
/**
 * @swagger
 * /api/delete:
 *  delete:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete("/delete/:id", todosController.todos_delete);

/**
 * @swagger
 * /api/edit:
 *  put:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put("/edit", todosController.todos_edit);

// Users
router.get("/users", usersController.all_users);
router.get("/users/:id", usersController.find_user);
router.post("/users", usersController.new_user);
router.put("/users", usersController.edit_user);
router.delete("/users/:id", usersController.delete_user);

module.exports = router;

