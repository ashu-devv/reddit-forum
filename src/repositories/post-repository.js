const Post = require('../models/post');

const createPost = async (title, content, userId) => {
  return await Post.create({ title, content, userId });
};

const getPosts = async () => {
  return await Post.findAll();
};

const getPostById = async (id) => {
  return await Post.findByPk(id);
};

const updatePost = async (id, title, content) => {
  const post = await Post.findByPk(id);
  if (!post) {
    throw new Error('Post not found');
  }
  post.title = title;
  post.content = content;
  return await post.save();
};

const deletePost = async (id) => {
  const post = await Post.findByPk(id);
  if (!post) {
    throw new Error('Post not found');
  }
  return await post.destroy();
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
