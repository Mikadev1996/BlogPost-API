const passport = require('passport');
const jwt = require('jsonwebtoken');
const Post = require('../models/post');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

exports.posts_get = (req, res, next) => {
    Post.find({})
        .sort({timestamp: 1})
        .exec((err, list_posts) => {
            if (err) return next(err);
            res.json({
                posts: list_posts
            })
        })
}

exports.post_create = (req, res, next) => {
    jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
        if (err) return res.json({error: err});
        let newPost = new Post({
            title: req.body.post_title,
            text: req.body.post_text,
            timestamp: Date.now(),
            user: req.user,
            published: req.body.published
        })

        newPost.save((err) => {
            if (err) return next(err);
            res.redirect('/posts');
        })
    })
}

exports.post_update_get = (req, res, next) => {

}

exports.post_update_post = (req, res, next) => {

    let newPost = new Post({
        title: req.body.title,
        text: req.body.title,
        timestamp: Date.now(),
        edited: true,
        _id: req.params.id
    })

    Post.findByIdAndUpdate(req.params.id, newPost, {}, function (err, thePost) {
        if (err) return next(err);
        res.redirect(thePost.url);
    })

}

exports.post_delete = (req, res, next) => {
    Post.findByIdAndRemove(req.params.id, function deletePost(err) {
        if (err) return next(err);
        res.redirect('/posts');
    })
}