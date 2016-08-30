var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber');
    sourcemaps = require('gulp-sourcemaps');

var reload = browserSync.reload;

// BROWSER SYNC
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// ON ERROR FUNCTION
var onError = function(err) {
  gutil.beep();
  console.log(err);
};


// LESS
gulp.task('less', function() {
  gulp.src('less/main.less')
  .pipe(plumber({
      errorHandler: onError
    }))
    //.pipe(sourcemaps.init())
        .pipe(less())
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({stream:true}));
});



// WATCH
gulp.task('watch', function() {
    gulp.watch('less/**/*.less', function(){
        gulp.run('less');
    });
    gulp.watch('**/*.html').on('change', reload);
});


gulp.task('default', ['less', 'watch', 'browser-sync']);
