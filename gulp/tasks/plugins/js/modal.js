"use strict";

module.exports = function() {
  $.gulp.task("modal:js", function() {
    return $.gulp
      .src('node_modules/jquery-modal/jquery.modal.min.js')
      .pipe($.gulp.dest($.config.src + "/js/plugins/"));
  });
};
