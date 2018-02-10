"use strict";

module.exports = function() {
  $.gulp.task("jqueryCopy", function() {
    return $.gulp
      .src('node_modules/jquery/dist/jquery.min.js')
      .pipe($.gulp.dest($.config.src + "/js/plugins/"));
  });
};
