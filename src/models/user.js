const { db } = require('../config/database-config');
const bcrypt = require('bcryptjs');

const User = {
    createTable: async () => {
        await db.execute(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role ENUM('admin', 'user') DEFAULT 'user'
            )
        `);
    },
    createUser: async (username, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await db.execute(`
            INSERT INTO users (username, email, password)
            VALUES (?, ?, ?)
        `, [username, email, hashedPassword]);
        return result.insertId;
    },
    getUserById: async (id) => {
        const [rows] = await db.execute(`
            SELECT * FROM users WHERE id = ?
        `, [id]);
        return rows[0];
    },
    getUserByEmail: async (email) => {
        const [rows] = await db.execute(`
            SELECT * FROM users WHERE email = ?
        `, [email]);
        return rows[0];
    },
    updateUser: async (id, username, email, password, role) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.execute(`
            UPDATE users SET username = ?, email = ?, password = ?, role = ?
            WHERE id = ?
        `, [username, email, hashedPassword, role, id]);
    },
    deleteUser: async (id) => {
        await db.execute(`
            DELETE FROM users WHERE id = ?
        `, [id]);
    },
    comparePassword: async (inputPassword, storedPassword) => {
        return await bcrypt.compare(inputPassword, storedPassword);
    }
};

module.exports = User;
