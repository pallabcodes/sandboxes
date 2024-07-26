// [REMOVE]: This is dummy code for example
const userRepository = require("./user.repository");

exports.getAllUsers = async () => {
  return userRepository.findAll();
};
