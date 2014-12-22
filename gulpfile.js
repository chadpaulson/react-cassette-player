'use strict'

var gulp = require('gulp')
var clean = require('gulp-clean')
var react = require('gulp-react')


gulp.task('clean', function(done) {
  return gulp.src('lib/cassette.js',
    {read:false}).pipe(clean())
})

gulp.task('buildjs', ['clean'], function() {
  return gulp.src('src/cassette.jsx').pipe(react()).pipe(gulp.dest('lib'))
})

gulp.task('default', ['buildjs'])
