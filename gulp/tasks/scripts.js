"use strict";
module.exports = function() {
  $.gulp.task("scripts", function() {
    return $.gulp
      .src(['./src/js/user/**/*.js',])
      .pipe($.p.plumber())
      .pipe($.p.babel())
      .pipe($.p.concat("bundle.js"))
      .pipe($.p.uglify())
      .pipe($.gulp.dest($.config.build + "/scripts"));
  });
};
