const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user-repository');

const register = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userRepository.createUser(username, email, hashedPassword, 'user');
  return user;
};

const login = async (email, password) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new Error('User not found');
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Invalid password');
  }
  const token = jwt.sign({ id: user.id, role: user.role }, 'your_secret_key', { expiresIn: '1h' });
  return { user, token };
};

module.exports = { register, login };