const userCtrl = require('./../controllers/user.ctrl');

module.exports = (router) => {
    router
        .route('/login/:name/:password')
        .get(userCtrl.login);
    /**
     * add an user
     */
    router
        .route('/user')
        .post(userCtrl.addUser);
}