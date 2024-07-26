// [REMOVE]: This is dummy code for example
const User = require("../features/user/user.model");

exports.seedUsers = async () => {
  await User.bulkCreate([
    { name: "John Doe", email: "john@example.com", password: "password1" },
    { name: "Jane Smith", email: "jane@example.com", password: "password2" },
  ]);
};
