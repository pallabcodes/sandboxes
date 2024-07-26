// Repository for user-related database operations
const User = require('../models/userModel');

exports.findAll = () => {
  return User.find();
};

exports.findById = (id) => {
  return User.findById(id);
};

exports.create = (userData) => {
  const user = new User(userData);
  return user.save();
};
