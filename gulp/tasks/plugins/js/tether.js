"use strict";

module.exports = function() {
  $.gulp.task("tetherJs", function() {
    return $.gulp
      .src('node_modules/tether/dist/js/tether.min.js')
      .pipe($.gulp.dest($.config.src + "/js/plugins/"));
  });
};
