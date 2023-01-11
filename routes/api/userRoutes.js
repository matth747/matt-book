const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/userController');
  
  // /api/comments
  router.route('/').get(getComments).post(createComment);
  
  // /api/comments/:commentId
  router.route('/:commentId').get(getSingleComment);

module.exports = router