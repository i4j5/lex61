var gulp   = require('gulp');
var coffee = require('gulp-coffee');
var handleError = require('../utils/handleErrors');
var config = require('../config').coffeescripts;

gulp.task('coffeescripts', function(){

  return gulp
  	.src(config.src)
   	.pipe(coffee({bare: false}))
    .on('error', handleError)
    .pipe( gulp.dest(config.dest) );

});