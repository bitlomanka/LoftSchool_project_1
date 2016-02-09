var gulp = require("gulp"),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),    
    browserSync = require('browser-sync'),
    postcss = require('gulp-postcss'),    
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');
 
// css/js/html
gulp.task('html', function () {
    return gulp.src('app/source/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', postcss([
                autoprefixer({ browsers: ['last 2 versions'] }),
                cssnano
            ])
         ))        
        .pipe(gulp.dest('app/build'));
});

// картинки
gulp.task('images', function () {
  return gulp.src('app/source/images/**/*.*')
    .pipe(gulp.dest('app/build/images'));
});

// шрифты
gulp.task('fonts', function () {
  return gulp.src('app/source/fonts/**/*.*')
    .pipe(gulp.dest('app/build/css'));
});
    
// сервер
gulp.task('server', function () {  
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app/build'
    }
  });
});

// слежка
gulp.task('watch', function () {
  gulp.watch([
    'app/source/*.html',
    'app/source/js/**/*.js',
    'app/source/css/**/*.css',
    'app/source/images/**/*.*',
  ], ['build', browserSync.reload]);
});

// сборка
gulp.task('build', ['html', 'images', 'fonts']);

// таск по умолчанию
gulp.task('default', ['build', 'server', 'watch']);