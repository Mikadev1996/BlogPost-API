const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Get Posts / Post
router.get('/', )
router.get('/post/:id')

// Create Post
router.get('/create')
router.post('/create')


// Update Post (Published/Unpublished)
router.put('/post/:id/update')

// Delete Post
router.delete('/post/:id')

module.exports = router;
