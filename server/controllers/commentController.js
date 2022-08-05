const Comment = require('../models/comment');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

exports.comments_get = (req, res, next) => {
    Comment.findById(req.params.id)
        .sort({timestamp: 1})
        .exec((err, list_comments) => {
            if (err) {
                res.json({error: err});
                return next(err);
            }
            res.json({
                comments: list_comments
            })
        })
}

exports.comment_post = (req, res, next) => {
    let newComment = new Comment({
        post: req.params.id,
        timestamp: Date.now(),
        username: req.body.username
    })

    newComment.save((err) => {
        if (err) {
            res.json({error: err});
            return next(err);
        }
        res.json({
            comment: newComment
        })
    })
}