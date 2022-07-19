const express = require('express');
const path = require("path");
const router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
});

// router.get('/create', function(req, res, next) {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
// });


module.exports = router;
