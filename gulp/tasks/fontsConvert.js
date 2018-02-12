"use strict";

module.exports = function() {
  $.gulp.task("ttf2woff2", function() {
    return $.gulp
      .src('./src/fonts/**/*.ttf')
      .pipe($.p.ttf2woff2())
      .pipe($.gulp.dest($.config.build + "/fonts/"));
  });
};
