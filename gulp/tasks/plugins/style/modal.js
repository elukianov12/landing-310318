"use strict";

module.exports = function() {
  $.gulp.task("modal:styles", function() {
    return $.gulp
      .src('node_modules/jquery-modal/jquery.modal.min.css')
      .pipe(
        $.p.rename({
          extname: ".scss"
        })
      )
      .pipe($.gulp.dest($.config.src + "/sass/libs/"));
  });
};
