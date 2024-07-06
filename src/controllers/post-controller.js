const postService = require('../services/post-service');

const createPost = async ({ title, content, userId }) => {
  return await postService.createPost(title, content, userId);
};

const getPosts = async () => {
  return await postService.getPosts();
};

const getPostById = async (id) => {
  return await postService.getPostById(id);
};

const updatePost = async ({ id, title, content }) => {
  return await postService.updatePost(id, title, content);
};

const deletePost = async (id) => {
  return await postService.deletePost(id);
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
