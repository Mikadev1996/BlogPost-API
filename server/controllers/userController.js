const { body, validationResult } = require('express-validator')
const User = require('../models/user');

// Sign Up
exports.sign_up_get = (req, res, next) => {
    const user = new User({
        username: 'testname ',
        password: 'testpass',
        date_joined: Date.now(),
    })
    res.json({user: user})
}
exports.sign_up_post = (req, res, next) => {
    // const user = new User({
    //     username: 'testname ',
    //     password: 'testpass',
    //     date_joined: Date.now(),
    // })
    // res.json({user: user})
    // res.redirect('/create');
}


// Sign In
exports.sign_in_get = (req, res, next) => {}
exports.sign_in_post = (req, res, next) => {}

// Sign Out
exports.sign_out_post = (req, res, next) => {}