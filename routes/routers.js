// combine all routers
const user = require('./user');

module.exports = (router) => {
    user(router);
};