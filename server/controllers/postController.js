const passport = require('passport');
const jwt = require('jsonwebtoken');
const Post = require('../models/post');
const Comment = require('../models/comment');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const async = require('async');


// Get All Posts
exports.posts_all_get = (req, res, next) => {
    Post.find({})
        .populate("user")
        .sort({timestamp: 1})
        .exec((err, list_posts) => {
            if (err) return next(err);
            res.json({
                posts: list_posts
            })
        })
}

// Get Single Posts
exports.post_get = (req, res, next) => {
    async.parallel({
        post_details(callback) {
            Post.findById(req.params.id)
                .populate("user")
                .exec(callback);
        },
        comments(callback) {
            Comment.find({post: req.params.id})
                .sort({timestamp: 1})
                .exec(callback);
        }
    }, (err, results) => {
        if (err) {
            res.json({error: err});
            return next(err);
        }
        res.json({
            post: results.post_details,
            comments: results.comments
        })
    })
}

exports.post_create = (req, res, next) => {
    jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {

        let newPost = new Post({
            title: req.body.title,
            text: req.body.text,
            likes: 0,
            timestamp: Date.now(),
            user: authData._id,
            published: req.body.published
        })

        newPost.save((err) => {
            if (err) return res.statusCode(401).json({error: err});
            res.redirect('/posts');
        })
    })
}

exports.post_update_get = (req, res, next) => {
    jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
        if (err) return res.json({error: err, message: "JWT Auth Error"});
        Post.findById(req.params.id)
            .populate("user")
            .exec((err, results) => {
                if (err) {
                    res.json({error: err});
                    return next(err);
                }
                res.json({
                    post: results
                })
            })
    })
}

exports.post_update_post = (req, res, next) => {
    jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
        let newPost = new Post({
            title: req.body.title,
            text: req.body.title,
            timestamp: Date.now(),
            edited: true,
            updated: req.body.updated,
            _id: req.params.id
        })

        Post.findById(req.params.id)
            .populate("user")
            .exec((checkErr, results) => {
                if (checkErr) return res.json({error: checkErr, message: "Check reqUser & postUser error"});
                else if (results.user._id !== authData.user._id) return res.json({error: "Incorrect User Account"});
            })

        Post.findByIdAndUpdate(req.params.id, newPost, {}, function (error, thePost) {
            if (error) {
                res.json({error: error});
                return next(error);
            }
            res.redirect(thePost.url);
        })
    })
}

exports.post_delete = (req, res, next) => {
    Post.findByIdAndRemove(req.params.id, function deletePost(err) {
        if (err) return next(err);
        res.redirect('/posts');
    })
}