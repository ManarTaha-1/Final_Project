const Joi = require('joi');

const createPostSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(10).required(),
  author: Joi.string().hex().length(24).required(), // MongoDB ObjectId format
  image: Joi.string().allow(''),
});

const updatePostSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  content: Joi.string().min(10),
  image: Joi.string().allow(''),
});

module.exports = { createPostSchema, updatePostSchema };