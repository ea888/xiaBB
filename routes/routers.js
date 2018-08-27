// combine all routers
const user = require('./user');
const auth = require('./auth');

module.exports = (router) => {
    //authentication must be before all other urls but after login
    auth(router);
    user(router);
};