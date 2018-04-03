"use strict";

module.exports = function() {
  $.gulp.task("socialButtons:js", function() {
    return $.gulp
      .src('node_modules/social-buttons/src/js/SocialButtons.js')
      .pipe($.gulp.dest($.config.src + "/js/plugins/"));
  });
};
