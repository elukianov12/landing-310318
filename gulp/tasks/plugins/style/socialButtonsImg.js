"use strict";

module.exports = function() {
  $.gulp.task("socialButtons:img", function() {
    return $.gulp
      .src('node_modules/social-buttons/src/icons/social-icon.svg')
      .pipe($.gulp.dest($.config.src + "/assets/img"));
  });
};
