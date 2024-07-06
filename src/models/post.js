const { db } = require('../config/database-config');

const Post = {
    createTable: async () => {
        await db.execute(`
            CREATE TABLE IF NOT EXISTS posts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                user_id INT,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        `);
    },
    createPost: async (title, description, userId) => {
        const [result] = await db.execute(`
            INSERT INTO posts (title, description, user_id)
            VALUES (?, ?, ?)
        `, [title, description, userId]);
        return result.insertId;
    },
    getPosts: async () => {
        const [rows] = await db.execute(`
            SELECT * FROM posts
        `);
        return rows;
    },
    getPostById: async (id) => {
        const [rows] = await db.execute(`
            SELECT * FROM posts WHERE id = ?
        `, [id]);
        return rows[0];
    },
    updatePost: async (id, title, description) => {
        await db.execute(`
            UPDATE posts SET title = ?, description = ? WHERE id = ?
        `, [title, description, id]);
    },
    deletePost: async (id) => {
        await db.execute(`
            DELETE FROM posts WHERE id = ?
        `, [id]);
    }
};

module.exports = Post;