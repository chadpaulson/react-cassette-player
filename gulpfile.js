'use strict'

var gulp = require('gulp')
var clean = require('gulp-clean')
var react = require('gulp-react')
var jest = require('gulp-jest')

gulp.task('clean', function(done) {
  return gulp.src('lib/cassette.js',
    {read:false}).pipe(clean())
})

gulp.task('buildjs', ['clean'], function() {
  return gulp.src('src/cassette.jsx').pipe(react()).pipe(gulp.dest('lib'))
})

gulp.task('default', ['buildjs'])

// needs to be ran with the --harmony flag, which is included in the `npm test` script.
gulp.task('jest', ['default'], function () {
    return gulp.src('__tests__').pipe(jest({
      scriptPreprocessor: './support/preprocessor.js',
      unmockedModulePathPatterns: ['node_modules/react'],
      testPathIgnorePatterns: ['support'],
      moduleFileExtensions: [
          'js',
          'json',
          'react'
      ]
    }));
});
