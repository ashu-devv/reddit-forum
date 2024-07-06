const express = require('express');
const postController = require('../controllers/post-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = await postController.createPost({ title, content, userId: req.user.id });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const posts = await postController.getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await postController.getPostById(id);
        if (!post) {
            res.status(404).json({ error: 'Post not found' });
        } else {
            res.status(200).json(post);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const post = await postController.getPostById(id);
        if (post.userId !== req.user.id) {
            res.status(403).json({ error: 'Not authorized' });
        } else {
            const updatedPost = await postController.updatePost({ id, title, content });
            res.status(200).json(updatedPost);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    try {
        const post = await postController.getPostById(id);
        if (post.userId !== req.user.id) {
            res.status(403).json({ error: 'Not authorized' });
        } else {
            await postController.deletePost(id);
            res.status(200).json({ message: 'Post deleted' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
