"use strict";
module.exports = function() {
  $.gulp.task("scripts:plugins", function() {
    return $.gulp
      .src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/tether/dist/js/tether.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
      ])
      .pipe($.p.plumber())
      .pipe($.p.babel())
      .pipe($.p.concat("plugins.js"))
      .pipe($.p.uglify())
      .pipe($.gulp.dest($.config.build + "/scripts"));
  });
};
