const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwt = require('jsonwebtoken')

// Check Current User
router.get('/current-user', userController.current_user_get);

// Sign Up User
router.post('/sign-up', userController.sign_up_post);

// Sign In User
router.post('/sign-in', userController.sign_in_post);

// Sign Out User
router.post('/sign-out', userController.sign_out_post);

module.exports = router;
