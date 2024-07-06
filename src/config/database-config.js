const mysql = require('mysql2');
const { drizzle } = require('drizzle-orm/mysql2'); 
const {serverConfig} = require('./index');

const pool = mysql.createPool({
  host: serverConfig.DB_HOST,
  user: serverConfig.DB_USER,
  password: serverConfig.DB_PASSWORD,
  database:serverConfig.DB_NAME,
}).promise();


const db = drizzle(pool);
module.exports = {db};