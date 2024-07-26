// Script for seeding user data
const User = require('../models/userModel');

const seedUsers = async () => {
  await User.create([
    {
      username: 'johndoe',
      email: 'johndoe@example.com',
      password: 'password123',
    },
    {
      username: 'janedoe',
      email: 'janedoe@example.com',
      password: 'password123',
    },
  ]);
  console.log('Users seeded!');
};

seedUsers().catch((error) => console.error('Error seeding users:', error));
