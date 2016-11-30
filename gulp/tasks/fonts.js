var gulp   = require('gulp');
var handleError = require('../utils/handleErrors');
var config = require('../config').fonts;

gulp.task('fonts', function(){

  return gulp
    .src(config.src)
    .pipe( gulp.dest(config.dest) );

});