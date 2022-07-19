
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const userRouter = require('./routes/users');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
})
//
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
