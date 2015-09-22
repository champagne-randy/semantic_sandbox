semantic.ui Starter Kit
========================


This is a fully loaded semantic.ui project starter kit. It uses a gulp build with the usual node.js dev goodies


dependencies are:

"del": "^1.2.1",
"gulp-autoprefixer": "^2.3.1",
"gulp-cache": "^0.2.10",
"gulp-concat": "^2.6.0",
"gulp-imagemin": "^2.3.0",
"gulp-jshint": "^1.11.2",
"gulp-livereload": "^3.8.0",
"gulp-minify": "0.0.5",
"gulp-minify-css": "^1.2.1",
"gulp-notify": "^2.2.0",
"gulp-rename": "^1.2.2",
"gulp-ruby-sass": "^1.3.0",
"gulp-uglify": "^1.3.0"




ToDo:
x initialize node.js project
- write gulpfile.js
- hook up linting
x organize directory structure
- add a server.js
- add bootstrap library to make this more generic
- abstract the build file, use config file that determines which front-end framework project will use
	// config files
	var db = require('./config/db');
	Bower is the solution to this problem
