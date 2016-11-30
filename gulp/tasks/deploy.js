var gulp = require('gulp');
var surge = require('gulp-surge')

gulp.task('deploy', ['build'], function (){
	return surge({
	  project: './build',
	  domain: 'lex61.ru'
	})
});