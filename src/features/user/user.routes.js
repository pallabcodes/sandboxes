// [REMOVE]: This is dummy code for example
const express = require("express");
const userController = require("./user.controller");

const router = express.Router();

router.get("/", userController.getAllUsers);

module.exports = router;
