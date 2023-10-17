const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const directorsRouter = require('./routes/directors');

const app = express();
db.on('open', ()=>{
  console.log("Conexion OK");
});
db.on('error',()=>{
  console.log("Conexion NO OK")
})



//mongodb://<dbuser>?:<dbPassword>?@<url>:<port>/<dbName> elementos para conectarnos a base de datos de mongoDB
const url = "mongodb://localhot27017/video-club"
mongoose.connection(url);

const db = mongoose.connect;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

  //middlewares de enrutamiento
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/directors', directorsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
