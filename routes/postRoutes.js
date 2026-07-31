const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const { createPostSchema, updatePostSchema } = require('../validations/postValidation');
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/postController');

router.post('/', validate(createPostSchema), createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.put('/:id', validate(updatePostSchema), updatePost);
router.delete('/:id', deletePost);

module.exports = router;