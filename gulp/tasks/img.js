"use strict";
module.exports = function() {
  $.gulp.task("img", function() {
    return $.gulp
      .src("src/assets/img/**/*")
      .pipe($.p.imagemin())
      .pipe($.gulp.dest($.config.build + "/img"));
  });
};

