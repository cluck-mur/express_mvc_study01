var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user/user');
var userController = new UserController();

/* GET users listing. */
router.get('/', userController.showAllUsers);
router.get('/json', userController.sendJson);
router.get('/:userId', userController.showUserById);

module.exports = router;
