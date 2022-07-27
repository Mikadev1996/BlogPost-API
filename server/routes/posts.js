const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const {post_update} = require("../controllers/postController");

// Get Posts / Post
router.get('/', postController.posts_all_get);
router.get('/post/:id', postController.post_get);

// Create Post
router.post('/create', postController.post_create);


// Update Post (Published/Unpublished)
router.get('/post/:id/update', postController.post_update_get);
router.put('/post/:id/update', postController.post_update_post);

// Delete Post
router.delete('/post/:id', postController.post_delete)



module.exports = router;

