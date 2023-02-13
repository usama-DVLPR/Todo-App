const express = require("express");
const cors = require("cors");
const todoListRoutes = require("./routes/todoListRoute");

const app = express();
// middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/todolist", todoListRoutes);

module.exports = app;
