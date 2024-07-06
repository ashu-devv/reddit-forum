const db = require('../config/database-config');

const User = db.define('user', {
  id: { type: db.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: db.DataTypes.STRING, allowNull: false },
  email: { type: db.DataTypes.STRING, allowNull: false },
  password: { type: db.DataTypes.STRING, allowNull: false },
  role: { type: db.DataTypes.STRING, allowNull: false, defaultValue: 'user' }, // admin or user
});

module.exports = User;
