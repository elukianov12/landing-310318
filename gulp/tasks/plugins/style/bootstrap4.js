"use strict";

module.exports = function() {
  $.gulp.task("bootstrapStyleCopy", function() {
    return $.gulp
      .src('node_modules/bootstrap/dist/css/bootstrap.min.css')
      .pipe(
        $.p.rename({
          extname: ".scss"
        })
      )
      .pipe($.gulp.dest($.config.src + "/sass/libs/"));
  });
};
