var gulp   = require('gulp');
var imagemin = require('gulp-imagemin');
var handleError = require('../utils/handleErrors');
var config = require('../config').images;

gulp.task('images', function(){

  return gulp
  	.src(config.src)
    .pipe( imagemin({ progressive: true }) )
    .on('error', handleError)
    .pipe( gulp.dest(config.dest) );

});