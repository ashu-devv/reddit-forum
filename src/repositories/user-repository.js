const User = require('../models/user');

const createUser = async (username, email, password, role) => {
  return await User.create({ username, email, password, role });
};

const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

module.exports = { createUser, getUserByEmail, getUserById };
