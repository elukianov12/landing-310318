"use strict";

module.exports = function() {
  $.gulp.task("fa:fontCopy", function() {
    return $.gulp
      .src(['node_modules/font-awesome/fonts/*.woff','node_modules/font-awesome/fonts/*.woff2'])
      .pipe($.gulp.dest($.config.src + "/fonts/"));
  });
};
