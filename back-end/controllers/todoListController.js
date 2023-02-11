const TodoList = require('./../models/todoListModel');
const APIFeatures = require('./../utils/apiFeatures');

// create new todo
exports.createTodo = async (req, res) => {
    try {
        const newTodo = await TodoList.create(req.body);
        res.status(201).json({
            status: 'SUCCESS',
            data: {
                todo: newTodo
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'ERROR',
            error: err.message
        })
    }
}


// get all todo
exports.getAllTodoLists = async (req, res) => {
    try {
        // const todoLists = await TodoList.find();

        const features = new APIFeatures(TodoList.find(), req.query).filter().limitFields();

        const todoLists = await features.query;

        if (todoLists.length === 0) {
            res.status(200).json({
                status: 'SUCCESS',
                data: {
                    todoLists: 'No todo lists found'
                }

            })
        } else {
            res.status(200).json({
                status: 'SUCCESS',
                result: todoLists.length,
                data: {
                    todoLists
                }
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'ERROR',
            error: err.message
        })
    }
}


// get specific todo

exports.getTodo = async (req, res) => {
    try {
        // const todo = await TodoList.findById(req.params.id);
        const features = new APIFeatures(TodoList.findById(req.params.id)).limitFields();
        const todo = await features.query;
        if (!todo) {
            res.status(200).json({
                status: 'SUCCESS',
                data: {
                    todo: 'No todo find against this ID please check id again.'
                }
            })
        } else {
            res.status(200).json({
                status: 'SUCCESS',
                data: {
                    todo
                }
            })
        }


    } catch (err) {
        res.status(400).json({
            status: 'ERROR',
            error: err.message
        })
    }
}


// update specific todo
exports.updateTodo = async (req, res) => {
    try {
        const updatedTodo = await TodoList.findByIdAndUpdate(req.params.id, req.body,
            {new: true, runValidators: true});
        res.status(200).json({
            status: 'SUCCESS',
            data: {
                todo: updatedTodo
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'ERROR',
            error: err.message
        })
    }
}


// delete specific todo
exports.deleteTodo = async (req, res) => {
    try {
        await TodoList.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'SUCCESS',
            data: {
                todo: null
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'ERROR',
            error: err.message
        })
    }
}