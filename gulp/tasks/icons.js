"use strict";

module.exports = function() {
  $.gulp.task("icons", function() {
    return ($.gulp.src('src/assets/icons/**/*.*')
        .pipe($.gulp.dest($.config.build + "/icons")) );
  });
};
