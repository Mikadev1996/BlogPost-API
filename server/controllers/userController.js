const { body, validationResult } = require('express-validator')
const User = require('../models/user');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Current User
exports.current_user_get = (req, res, next) => {
    if (req.token) {
        res.json({
            user: {
                _id: req.user._id,
                username: req.user.username
            },
            token_data: req.token
        })
        return;
    }
    res.json({
        user: req.user,
    })
}

// Sign Up
exports.sign_up_post = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if (err) return next(err);

        const user = new User({
            username: req.body.username,
            password: hashedPass,
            date_joined: Date.now(),
        }).save((err) => {
            if (err) return next(err);
            res.redirect('/');
        })
    })
}

// Sign In
exports.sign_in_post = function (req, res) {
    passport.authenticate("local", { session: false }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                message: "Incorrect Username or Password",
                user,
            });
        }

        jwt.sign(
            { _id: user._id, username: user.username },
            process.env.JWT_KEY,
            { expiresIn: "10m" },
            (err, token) => {
                if (err) return res.status(400).json(err);
                res.json({
                    token: token,
                    user: { _id: user._id, username: user.username },
                });
            }
        );
    })(req, res);
};

// Sign Out
exports.sign_out_post = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            res.send({error: err});
            return next(err);
        }
    })
    res.redirect('/');
}
