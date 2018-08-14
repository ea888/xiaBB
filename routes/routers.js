// server/routes/routers.js
const user = require('./user');

module.exports = (router) => {
    user(router);
};