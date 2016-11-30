var gulp   = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config').browserify;

gulp.task('browserify', function() {
	browserSync.init(config);

	browserSync.watch("app/public/**/*.*").on('change', browserSync.reload);
});