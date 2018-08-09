// server/routes/article.js
const userCtrl = require('./../controllers/user.ctrl');

module.exports = (router) => {

    /**
     * get all users
     */
    router
        .route('/users')
        .get(userCtrl.getAll);

    /**
     * add an user
     */
    router
        .route('/user')
        .post(userCtrl.addUser);

    /**
     * get a particular user to view
     */
    router
        .route('/user/:id')
        .get(userCtrl.getUser);
};