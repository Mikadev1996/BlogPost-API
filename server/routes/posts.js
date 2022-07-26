const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const {post_update} = require("../controllers/postController");

// Get Posts / Post
router.get('/', postController.posts_get);
router.get('/post/:id')

// Create Post
router.post('/create', verifyToken, postController.post_create);


// Update Post (Published/Unpublished)
router.get('/post/:id/update', verifyToken, postController.post_update_get);
router.put('/post/:id/update', verifyToken, postController.post_update_post);

// Delete Post
router.delete('/post/:id', verifyToken, postController.post_delete)


function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at space
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];
        next();
    } else {
        res.sendStatus(403).json({error: 'Token undefined'})
    }

}

module.exports = router;

