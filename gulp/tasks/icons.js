"use strict";

module.exports = function() {
  $.gulp.task("icons", function() {
    return $.gulp
      .src([
        "src/assets/icons/**/*.*",
        'node_modules/social-buttons/src/icons/*.*',
      ])
      .pipe($.gulp.dest($.config.build + "/icons"));
  });
};
