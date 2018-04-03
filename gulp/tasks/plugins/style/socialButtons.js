"use strict";

module.exports = function() {
  $.gulp.task("socialButtons:style", function() {
    return $.gulp
      .src('node_modules/social-buttons/src/css/SocialButtons.min.css')
      .pipe(
        $.p.rename({
          extname: ".scss"
        })
      )
      .pipe($.gulp.dest($.config.src + "/sass/libs/"));
  });
};
