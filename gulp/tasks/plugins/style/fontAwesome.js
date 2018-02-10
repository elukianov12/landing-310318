"use strict";

module.exports = function() {
  $.gulp.task("fa:fontCopy", function() {
    return $.gulp
      .src('node_modules/font-awesome/fonts/*.*')
      .pipe($.gulp.dest($.config.src + "/fonts/"));
  });
};
