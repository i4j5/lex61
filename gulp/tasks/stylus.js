var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var handleError = require('../utils/handleErrors');
var config = require('../config').stylus;

gulp.task('stylus', function() {

  return gulp
    .src(config.src)
    .pipe(stylus())
    .on('error', handleError)
    .pipe( autoprefixer({ browsers: ['last 15 versions'] }) )
    .pipe( gulp.dest(config.dest) );

});