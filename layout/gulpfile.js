const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const plumber =  require('gulp-plumber');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css')

gulp.task('sass', function() {
    return gulp.src(['src/style/style.sass'])
        .pipe(sass())
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie10+'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('assets', function(){
    return gulp.src(['src/assets/**/**/*.png', 'src/assets/**/**/*.svg'])
    .pipe(gulp.dest("dist/assets"))
})
gulp.task('js', function(){
    return gulp.src(['src/js/*.js'])
    .pipe(minify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest("dist/js"))
})
gulp.task('pug', function() {

        return gulp.src(['src/templates/*.pug'])
      .pipe(plumber())
      .pipe(pug({
          pretty: true,
          basedir: __dirname + '/src/templates/'
      }))
      .pipe(gulp.dest("dist/"))

  
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./dist"  
    });
    gulp.watch(['src/js/*.js'], ['js']);
    gulp.watch(['src/assets/**/**/*.png', 'src/assets/**/**/*.svg'], ['assets']);
    gulp.watch(['src/templates/**/*.pug'], ['pug']);
    gulp.watch(['src/style/**/**/**/*.sass'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
gulp.task('build', ['pug', 'sass', 'js', 'assets']);

