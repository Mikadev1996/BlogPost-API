var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res, next) => {
  res.send({
    message: "test message"
  })
})

app.get('/api', (req, res, next) => {
  res.json({
    "message": "serverStart"
  })
})

app.use((req, res, next) => {
  res.status(404)
      .json({
        error: "404: Page not found"
      })
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    "error": err
  })
});


module.exports = app;
