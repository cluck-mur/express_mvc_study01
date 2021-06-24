var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* ユーザーIDを指定できるルート */
router.get('/:userId', function (req, res, next) {
  var userId = req.params.userId;
  console.log('ユーザーID ' + userId + ' が指定されました。');
  res.send('ok');
});

/* ユーザーのリストをJSON出力する */
router.get('/json/', function (req, res, next) {
  // Sequelizeのモデルを使ってデータを取得する
  dbModels.User.findAll().then(users => {

    if (!users) return next(); // 404 Error

    res.json(users);
  });
});

module.exports = router;
