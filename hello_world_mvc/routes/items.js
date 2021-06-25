var express = require('express');
var router = express.Router();
// var UserController = require('../controllers/user');
// var userController = new UserController();

/* GET items listing. */
router.get('/', (req, res, next) => {
    res.send('アイテムリストを返却したつもり');
});

module.exports = router;
