// [REMOVE]: This is dummy code for example
const express = require("express");
const userRoutes = require("./features/user/user.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.use(errorMiddleware);

module.exports = app;
