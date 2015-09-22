var gulp = require('gulp'),							// plugin to process sass files
	sass = require('gulp-ruby-sass'),				// used to add browser specific prefixes to css code
	autoprefixer = require('gulp-autoprefixer'),	// used to minify css files
	minifycss = require('gulp-minify-css'),			// used to change the name of the ouput file (add .min)
	rename = require('gulp-rename'),				// used to concatenate multiple files into one
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');				// used to obfuscate code


/*
	ToDo:
	- create a clean task to clear dest folder
*/
gulp.task('clean', function() {
	return {};
});


/*
	ToDo:
	- create a build-semantic task
		copy all fonts
		xxx minify and copy semantic specific files
		simply copy content from ./src/libraries/semantic/packaged/ to ./public/libs/semantic/
	- add config details to config file:
		src for semantic files
		dest for semantic files
*/
gulp.task('process-semantic', function() {
	return gulp.src(['./src/libraries/semantic/packaged/**/*'])
		.pipe(gulp.dest('public/libs/semantic'));
});


/*
	ToDo:
	- update dir references for this project
	- consider exporting this function to it's own file
*/
gulp.task('process-styles', function() {
	return sass('./src/styles/main.scss', {style: 'expanded'})
		.pipe(autoprefixer('last 2 version'))
		.pipe(gulp.dest('./dest/styles/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('./dest/styles/'));
});

/*
	ToDo:
	- update dir references for this project
	- consider exporting this function to it's own file
*/
gulp.task('process-scripts', function() {
	return gulp.src('./src/scripts/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./dest/scripts/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./dest/scripts/'));
});

/*
	ToDo:
	- update dir references for this project
	- consider exporting this function to it's own file
*/
gulp.task('watch', function() {
	gulp.watch('./src/scripts/*.js', ['process-scripts']);
	gulp.watch('./src/styles/*.scss', ['process-styles']);
});

/*
	ToDo:
	- define what default task should be
	- is this the one that builds the entire project?
*/
gulp.task('default', function() {
	console.log("Default gulp task successfully created");
});