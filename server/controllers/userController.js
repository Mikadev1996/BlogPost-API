const { body, validationResult } = require('express-validator')
const User = require('../models/user');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Current User
exports.current_user_get = (req, res, next) => {
    if (req.token) {
        res.json({
            user: req.user,
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
exports.sign_in_post = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err || !user) {
            // return res.status(400).json({
            //     error: err,
            //     user : user
            // });
            res.send({error: err, user: user});
            return next(err);
        }

        req.login(user, {session: false}, (err) => {
            if (err) return res.status(401).json({error: err});
            const token = jwt.sign({user: user}, process.env.JWT_KEY);
            return res.status(200).json({
                message: 'Auth Passed',
                token: token
            });
        })
    })
}

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
