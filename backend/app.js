// packages
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.set('strictQuery', true);

var config = require('./config');

// routers
var fileRouter = require('./routes/filesRouter');
var projectRouter = require('./routes/projectsRouter');

// temp models
const Project = require('./models/projects');

// connect to mongodb
const url = config.mongoUrl;
const connect = mongoose.connect(url);
connect.then((db) => {
  console.log('Connected correctly to server');  
}, (err) => { console.log(err) });


var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/files', fileRouter);
app.use('/projects', projectRouter);

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
