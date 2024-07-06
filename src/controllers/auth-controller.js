const authService = require('../services/auth-service');

const register = async ({ username, email, password }) => {
  return await authService.register(username, email, password);
};

const login = async ({ email, password }) => {
  return await authService.login(email, password);
};

module.exports = { register, login };