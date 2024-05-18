const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('.source/styles/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('./build/styles'));
}

exports.sass = compilaSass;
