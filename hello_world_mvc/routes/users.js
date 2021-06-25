var express = require('express');
var router = express.Router();
// var db = require('../models');
var userController = require('../controllers/user');

/* GET users listing. */
router.get('/', userController.showAllUsers);
router.get('/json', userController.sendJson);
// router.get('/:userId', userController.showUserById);

// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

/* ユーザーのリストをJSON出力する */
// router.get('/json/', function (req, res, next) {
//   // Sequelizeのモデルを使ってデータを取得する
//   db.User.findAll().then(users => {

//     if (!users) return next(); // 404 Error

//     res.json(users);  // レスポンスを返す
//   })
//   .catch((e) => {
//     console.log(e);
//     return next();
//   });
// });

/* ユーザーIDを指定できるルート */
// router.get('/:userId', function (req, res, next) {
//   var userId = req.params.userId; // パラメータの値を取得
//   console.log('ユーザーID ' + userId + ' が指定されました。');  // ログで確認
//   res.send('ok'); // レスポンスを返す
// });
router.get('/:userId', userController.showUserById);

module.exports = router;
