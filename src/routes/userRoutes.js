// Routes related to user operations
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers);

module.exports = router;
