var gulp = require('gulp');
var sass = require('gulp-sass');
var cssbeautify = require('gulp-cssbeautify');
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssbeautify())
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});