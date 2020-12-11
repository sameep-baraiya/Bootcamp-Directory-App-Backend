const express = require('express');
const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require('../controllers/users');

const User = require('../models/User');

const router = express.Router({ mergeParams: true });

const advancedResult = require('../middleware/advancedResult');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advancedResult(User), getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
