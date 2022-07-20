const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res, next) => {
  res.json({
    message: "Hello from users"
  })
})

router.get('/sign-up', userController.sign_up_get);
router.post('/sign-up', userController.sign_up_post);

router.get('/sign-in', userController.sign_in_get);
router.post('/sign-in', userController.sign_in_post);

router.post('/sign-out', userController.sign_out_post);


module.exports = router;
