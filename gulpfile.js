var gulp = require('gulp'),
	sass = require('gulp-ruby-sass');


/*
	ToDo:
	- create a build-semantic task
		copy all fonts
		xxx minify and copy semantic specific files
		simply copy content from ./src/libraries/semantic/packaged/ to ./public/libs/semantic/
*/
gulp.task('process-styles', function() {
	return gulp.src('main.scss')
});