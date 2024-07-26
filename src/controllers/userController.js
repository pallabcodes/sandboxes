// Controller for user-related requests
const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};
