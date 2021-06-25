var express = require('express');
var db = require('../models/');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* ユーザーIDを指定できるルート */
// router.get('/:userId', function (req, res, next) {
//   var userId = req.params.userId; // パラメータの値を取得
//   console.log('ユーザーID ' + userId + ' が指定されました。');  // ログで確認
//   res.send('ok'); // レスポンスを返す
// });

/* ユーザーのリストをJSON出力する */
router.get('/json/', function (req, res, next) {
  // Sequelizeのモデルを使ってデータを取得する
  db.User.findAll().then(users => {

    if (!users) return next(); // 404 Error

    res.json(users);  // レスポンスを返す
  });
});

/* ユーザーIDを指定できるルート */
router.get('/:userId', function (req, res, next) {
  var userId = req.params.userId; // パラメータの値を取得
  console.log('ユーザーID ' + userId + ' が指定されました。');  // ログで確認
  res.send('ok'); // レスポンスを返す
});

module.exports = router;
