// Business logic for user operations
const userRepository = require('../repositories/userRepository');

exports.getAllUsers = () => {
  return userRepository.findAll();
};

exports.getUserById = (id) => {
  return userRepository.findById(id);
};

exports.createUser = (userData) => {
  return userRepository.create(userData);
};
