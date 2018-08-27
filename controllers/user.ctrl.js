const User = require('./../models/user');
var validator = require("email-validator");
var jwt = require('jsonwebtoken');
var config = require('./../server/config');

module.exports = {
    addUser: (req, res, next) => {
        let {name, email, password} = req.body;
        if (validator.validate(email)) {
            const user = new User({name, email, password});
            // const user = new User(req.body);
            user.save((err, user) => {
                if (err)
                    res.send(err);
                else
                    res.send(user);
                next();
            });
        } else {
            res.send("Email address is not valid.");
        }
    },
    getAll: (req, res, next) => {
        User.find().exec((err, user) => {
            if (err)
                res.send(err);
            else if (!user)
                res.send(404);
            else
                res.send(user);
            next()
        })
    },

    /**
     * article_id
     */
    getUser: (req, res, next) => {
        User.findById(req.params.id).exec((err, user) => {
            // .populate('author')
            // .populate('comments.author').exec((err, article)=> {
            if (err)
                res.send(err);
            else if (!user)
                res.send(404);
            else
                res.send(user);
            next()
        })
    },

    login: (req, res, next) => {
        let {name, password} = req.params;
        User.countDocuments({name: name, password: password}).exec((err, count) => {
                if (err)
                    res.send(err);
                else {
                    if (count === 1) {
                        const payload = {};
                        var token = jwt.sign(payload, config.secret, {
                            expiresIn: '5h' // expires in 5 hours
                        });
                        // return the information including token as JSON
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                    }
                    else {
                        res.json({
                            success: false
                        });
                    }
                }
                next()
            }
        )
    }
};