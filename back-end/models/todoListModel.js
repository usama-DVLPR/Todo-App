const mongoose = require("mongoose");

const todoListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
  },
});
const TodoList = mongoose.model("TodoList", todoListSchema);
module.exports = TodoList;
