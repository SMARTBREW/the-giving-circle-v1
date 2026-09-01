const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { User } = require('../../src/models');

const password = 'Password1!';

const userOne = {
  _id: new mongoose.Types.ObjectId(),
  name: 'User One',
  email: 'userone@example.com',
  mobile: '9999999999',
  password,
  role: 'user',
  employeeId: 'GC-10001',
};

const admin = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Admin User',
  email: 'admin@example.com',
  mobile: '8888888888',
  password,
  role: 'admin',
  employeeId: 'GC-10002',
};

const insertUsers = async (users) => {
  await User.insertMany(
    await Promise.all(
      users.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 8),
      })),
    ),
  );
};

module.exports = {
  userOne,
  admin,
  insertUsers,
};
