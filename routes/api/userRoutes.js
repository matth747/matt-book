const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/userController');
  
  // /api/comments
  router.route('/').get(getUsers).post(createUser);
  
  // /api/comments/:commentId
  router.route('/:userId').get(getSingleUser);

module.exports = router