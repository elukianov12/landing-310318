"use strict";

module.exports = function() {
  $.gulp.task("normalize", function() {
    return $.gulp
      .src("node_modules/normalize.css/normalize.css")
      .pipe(
        $.p.rename({
          extname: ".scss"
        })
      )
      .pipe($.gulp.dest($.config.src + "/sass/libs/"));
  });
};
