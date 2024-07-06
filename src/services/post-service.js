const postRepository = require('../repositories/post-repository');

const createPost = async (title, content, userId) => {
  return await postRepository.createPost(title, content, userId);
};

const getPosts = async () => {
  return await postRepository.getPosts();
};

const getPostById = async (id) => {
  return await postRepository.getPostById(id);
};

const updatePost = async (id, title, content) => {
  return await postRepository.updatePost(id, title, content);
};

const deletePost = async (id) => {
  return await postRepository.deletePost(id);
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
