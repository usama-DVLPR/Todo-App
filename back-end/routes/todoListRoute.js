const express = require('express');
const router = express.Router();
const todoListController = require('../controllers/todoListController');


// define routes

router
    .route('/')
    .get(todoListController.getAllTodoLists)
    .post(todoListController.createTodo);
router
    .route('/:id')
    .get(todoListController.getTodo)
    .patch(todoListController.updateTodo)
    .delete(todoListController.deleteTodo)



module.exports=router;