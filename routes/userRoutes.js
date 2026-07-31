const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const upload = require('../middlewares/upload'); 
const { createUserSchema, updateUserSchema } = require('../validations/userValidation');
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

router.post('/', upload.single('image'), validate(createUserSchema), createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', validate(updateUserSchema), updateUser);
router.delete('/:id', deleteUser);

module.exports = router;