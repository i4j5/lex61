var gulp   = require('gulp');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var handleError = require('../utils/handleErrors');
var config = require('../config').jade;

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('jade', function(){

  return gulp
  	.src(config.src)
    .pipe( jade({ pretty: true }) )
    .on('error', handleError)
    .pipe(rename(function (path) {
      path.dirname = '';
      path.extname = '.html'
    }))
    .pipe( gulp.dest(config.dest) )
    .pipe( reload({ stream: true }) );


});