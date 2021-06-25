var dbModules = require('../models');

var userController = {
    showAllUsers: function (req, res, next) {
        // sequelizeのモデルを使ってデータをDBから取得する
        dbModules.User.findAll()
            .then((users) => {
                if (!users) {
                    console.log('データを取得できませんでした。');
                    res.send('Error');
                } else {
                    for (let i = 0; i < users.length; i++) {
                        console.log(users[i].name);
                    }
                    res.render('allUsers', { users: users });
                }
            })
            .catch((e) => {
                console.log(e);
                res.send('Error');

            });
    },
    showUserById: function (req, res, next) {
        let userId = req.params.userId; // userId取得
        if (!userId) {
            console.log('userIdを取得できませんでした。');
            res.send('Error');
        } else {
            // sequelizeのモデルを使ってデータをDBから取得する
            dbModules.User.findByPk(userId)
                .then((user) => {
                    if (!user) {
                        console.log('データを取得できませんでした。');
                        res.send('Error');
                    } else {
                        console.log(user.toString());
                        res.render('oneUser', { user: user });
                    }
                })
                .catch((e) => {
                    console.log(e);
                    res.send('Error');
                });
        }
    },
    sendJson: function (req, res, next) {
        // Sequelizeのモデルを使ってデータを取得する
        dbModules.User.findAll()
            .then((users) => {
                if (!users) {
                    console.log('データを取得できませんでした。');
                    res.send('Error');
                } else {
                    res.json(users);  // レスポンスを返す
                }
            });
    }
}

module.exports = userController;