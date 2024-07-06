const db = require('../config/database-config');

const Post = db.define('post', {
  id: { type: db.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: db.DataTypes.STRING, allowNull: false },
  content: { type: db.DataTypes.TEXT, allowNull: false },
  userId: { type: db.DataTypes.INTEGER, allowNull: false },
});

module.exports = Post;
