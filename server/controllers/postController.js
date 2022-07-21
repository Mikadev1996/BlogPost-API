const passport = require('passport');
const jwt = require('jsonwebtoken');
const Post = require('../models/post');
const { body, validationResult } = require('express-validator');

exports.posts_get = (req, res, next) => {

}

exports.post_create = (req, res, next) => {
    jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
        if (err) return res.json({error: err});
        res.json({
            message: 'Post Created',
            data: authData,
            timestamp: Date.now()
        })
    })
}

exports.post_update = (req, res, next) => {
    Post.findByIdAndUpdate(req.params.id)
        .exec((err, post) => {
            res.json({
                post: post
            })
        })
}

exports.post_delete = (req, res, next) => {
    Post.findByIdAndRemove(req.params.id, function deletePost(err) {
        if (err) return next(err);
        res.redirect('/posts');
    })
}