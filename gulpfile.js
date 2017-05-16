// gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('default', function() {
	console.log('gulp default task started');
	console.log('Wooooooo');
});

gulp.task('sass', function() {
	return gulp.src('src/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
});



