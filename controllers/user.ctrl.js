
const User = require('./../models/user');

module.exports = {
    addUser: (req, res, next) => {
        let { name, email, password } = req.body;
        const user = new User({ name, email, password });
        // const user = new User(req.body);
        user.save((err, user)=> {
            if (err)
                res.send(err);
            else
                res.send(user);
            next();
        });
    },
    getAll: (req, res, next) => {
        User.find().exec((err, user)=> {
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

    /**
     * article_id
     */
    getUser: (req, res, next) => {
        User.findById(req.params.id).exec((err, user)=> {
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
    }
};