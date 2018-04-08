"use strict";
module.exports = function() {
  $.gulp.task("img", function() {
    return $.gulp
      .src([
        "src/assets/img/**/*",
        '/node_modules/country-select-js/build/img/*.png'
      ])
      .pipe($.p.imagemin())
      .pipe($.gulp.dest($.config.build + "/img"));
  });
};

