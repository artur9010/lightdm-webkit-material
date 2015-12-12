(function() {
  'use strict';

  var gulp = require('gulp'),
      $ = require('gulp-load-plugins')(),
      rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      sassFiles = ['./src/**/*.scss'],
      uglify = require('gulp-uglifyjs'),
      jsFiles = ['src/**/*.js'];

  var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  gulp.task('sass', function () {
    gulp
      .src(sassFiles)
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
      .pipe(rename(function(path) {
        path.dirname = '';
        path.basename = 'mdl-selectfield';
        path.extname = '.min.css';
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./'));
  });

  gulp.task('uglify', function() {
    gulp
      .src(jsFiles)
      .pipe(uglify('mdl-selectfield.min.js', {
        outSourceMap: true
      }))
      .pipe(gulp.dest('./'));
  });

  function watch() {
    gulp.watch(sassFiles, ['sass']);
    gulp.watch(jsFiles, ['uglify']);
  }

  gulp.task('watch', function () {
    watch();
  });

  gulp.task('serve', function() {
    $.connect.server({
      root: './',
      port: 5000,
      livereload: true
    });

    watch();
  });

  gulp.task('build', ['sass', 'uglify']);

  // The default task (called when you run `gulp` from cli)
  gulp.task('default', ['watch']);

})();
