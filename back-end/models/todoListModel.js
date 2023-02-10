const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});
const TodoList = mongoose.model('TodoList', todoListSchema);
module.exports = TodoList;