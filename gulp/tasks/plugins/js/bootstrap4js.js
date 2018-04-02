"use strict";

module.exports = function() {
  $.gulp.task("bootstrapJsCopy", function() {
    return $.gulp
      .src('node_modules/bootstrap/dist/js/bootstrap.min.js')
      .pipe($.gulp.dest($.config.src + "/js/plugins"));
  });
};
