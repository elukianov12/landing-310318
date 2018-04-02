"use strict";

module.exports = function() {
  $.gulp.task("airDatepicker:js", function() {
    return $.gulp
      .src('node_modules/air-datepicker/dist/js/datepicker.min.js')
      .pipe($.gulp.dest($.config.src + "/js/plugins/"));
  });
};
