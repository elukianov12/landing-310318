'use strict'

module.exports = function() {
    $.gulp.task("jsPlugins", function() {
      return $.gulp
        .src('./src/js/plugins/**/*.js')
        .pipe($.p.plumber())
        .pipe($.p.uglify())
        .pipe($.gulp.dest($.config.build + "/scripts"));
    });
  };
  