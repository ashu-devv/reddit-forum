const { drizzle } = require('drizzle-orm');
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit_forum',
});

const db = drizzle(pool);

module.exports = db;