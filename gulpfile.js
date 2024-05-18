const gulp = require('gulp');

function comprimirImagem() {
    gulp.task('imagemin', () => {
        return gulp.src('src/images/*')
          .pipe(imagemin())
          .pipe(gulp.dest('dist/images'));
      });
}

function compilaSass() {
    gulp.task('sass', () => {
        return gulp.src('src/scss/**/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('dist/css'));
      });
}

function comprimirJavaScrit() {
    gulp.task('uglify', () => {
        return gulp.src('src/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('dist/js'));
      });
}

exports.default = gulp.series(comprimirImagem, compilaSass, comprimirJavaScrit);

