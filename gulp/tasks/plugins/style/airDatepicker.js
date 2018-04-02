"use strict";

module.exports = function() {
  $.gulp.task("airDatepicker:style", function() {
    return $.gulp
      .src('node_modules/air-datepicker/dist/css/datepicker.min.css')
      .pipe(
        $.p.rename({
          extname: ".scss"
        })
      )
      .pipe($.gulp.dest($.config.src + "/sass/libs/"));
  });
};
