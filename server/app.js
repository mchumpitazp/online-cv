// packages
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var helmet = require('helmet');
var mongoose = require('mongoose');
mongoose.set('strictQuery', true);

var connectToDatabase = require('./dbConfig');

// Routers
var projectRouter = require('./routes/projectsRouter');
//var fileRouter = require('./routes/filesRouter');

// Temp Models
const Project = require('./models/projects');
//const File = require('./models/files');

// connect to mongodb and port
const PORT = process.env.PORT || 3003;
connectToDatabase().then((_) => {
  app.listen(PORT, (_) => {
    console.log(`Server started on port ${PORT}`);
    console.log(app.get('env'));
  });
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());
app.use('/api/projects', projectRouter);
//app.use('/api/files', fileRouter);

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