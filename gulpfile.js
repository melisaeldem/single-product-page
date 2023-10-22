const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('css', function() {
  return gulp.src('./assets/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('minify-css', function() {
  return gulp.src('./assets/css/style.css')
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/css/'));
});



gulp.task('watch', function() {
    gulp.watch('./assets/sass/**/*.scss', gulp.series('css'));
    gulp.watch('./assets/css/style.css', gulp.series('minify-css'));
  });