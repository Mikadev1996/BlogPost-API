const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Get Comments
router.get('/', commentController.comments_get);

// Add Comment
router.post('/', commentController.comment_post);

module.exports = router;