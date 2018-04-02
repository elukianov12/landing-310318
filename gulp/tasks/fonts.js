"use strict";

module.exports = function() {
  $.gulp.task("fonts", function() {
    return $.gulp
      .src(['./src/fonts/**/*.woff2','./src/fonts/**/*.woff'])
      .pipe($.gulp.dest($.config.build + "/fonts/"));
  });
};
