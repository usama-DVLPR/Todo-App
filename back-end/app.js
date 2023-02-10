const express = require('express');
const todoListRoutes = require('./routes/todoListRoute');

const app = express();
// middleware
app.use(express.json());

app.use('/api/v1/todolist', todoListRoutes)


module.exports = app;