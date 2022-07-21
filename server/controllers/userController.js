const { body, validationResult } = require('express-validator')
const User = require('../models/user');
const passport = require('passport');
const bcrypt = require('bcryptjs');

// Current User
exports.current_user_get = (req, res, next) => {
    res.json({
        user: req.user,
    })
}

// Sign Up
exports.sign_up_get = (req, res, next) => {
    res.json({msg: "sign up get, not implemented"});
}

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
exports.sign_in_get = (req, res, next) => {
    res.json({msg: "Sign in get, not implemented"});
}

exports.sign_in_post = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/log-in'
    })
}

// Sign Out
exports.sign_out_post = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
    })
    res.redirect('/');
}