"use strict";

module.exports = function() {
  $.gulp.task("socialButtons:img", function() {
    return $.gulp
      .src('node_modules/social-buttons/src/icons/**/*.*')
      .pipe($.gulp.dest($.config.src + "/assets/icons"));
  });
};
