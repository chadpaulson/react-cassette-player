'use strict'

var gulp = require('gulp')
var clean = require('gulp-clean')
var react = require('gulp-react')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')


gulp.task('clean', function(done) {
  return gulp.src('js/*.js',
    {read:false}).pipe(clean())
})

gulp.task('buildjs', ['clean'], function() {
  return gulp.src('src/*.jsx').pipe(react()).pipe(gulp.dest('js'))
})

gulp.task('copylib', function() {
  return gulp.src('node_modules/react-cassette-player/lib/cassette.js').pipe(gulp.dest('js'))
})

gulp.task('bundle', ['clean','buildjs','copylib'], function() {
  return browserify('./js/demo.js').bundle().pipe(source('bundle.js')).pipe(gulp.dest('js'))
})

gulp.task('bundlemin', ['clean','buildjs','copylib','bundle'], function() {
  return gulp.src('js/bundle.js').pipe(uglify()).pipe(rename('bundle.min.js')).pipe(gulp.dest('js'))
})

gulp.task('default', ['bundlemin'])
