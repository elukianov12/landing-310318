"use strict";

module.exports = function() {
  $.gulp.task("smoothScroll:js", function() {
    return $.gulp
      .src('node_modules/jquery-smooth-scroll/src/jquery.smooth-scroll.js')
      .pipe($.gulp.dest($.config.src + "/js/plugins/"));
  });
};
