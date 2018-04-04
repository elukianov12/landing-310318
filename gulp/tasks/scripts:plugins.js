"use strict";
module.exports = function() {
  $.gulp.task("scripts:plugins", function() {
    return $.gulp
      .src(['./src/js/plugins/**/*.js',])
      .pipe($.p.plumber())
      // .pipe($.p.babel())
      .pipe($.p.order([
        'src/js/plugins/jquery.min.js',
        'src/js/plugins/bootstrap.min.js',
        'src/js/plugins/tether.min.js',
      ], { base: './' }))
      .pipe($.p.concat("plugins.js"))
      // .pipe($.p.uglify())
      .pipe($.gulp.dest($.config.build + "/scripts"));
  });
};
