var dbModules = require('../../models');

/**
 * Class
 * コントローラ　User
 */
class UserController {
    /**
     * constructor
     * コンストラクタ
     */
    constructor() {
    }

    /**
     * showAllUsers
     * 全ユーザデータを取得しレンダーへ表示指示する
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    showAllUsers(req, res, next) {
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
                // res.send('Error');
                next();
            });
    }

    /**
     * showUserById
     * 指定IDのユーザデータを取得しレンダーへ表示指示する
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    showUserById(req, res, next) {
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
                    // res.send('Error');
                    next();
                });
        }
    }

    /**
     * sendJson
     * 全ユーザデータを取得しレスポンスにJSONを返す
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    sendJson(req, res, next) {
        // Sequelizeのモデルを使ってデータを取得する
        dbModules.User.findAll()
            .then((users) => {
                if (!users) {
                    console.log('データを取得できませんでした。');
                    res.send('Error');
                } else {
                    res.json(users);  // レスポンスを返す
                }
            })
            .catch((e) => {
                console.log(e);
                next();
            })
    }
}

module.exports = UserController;