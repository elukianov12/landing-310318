'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: false,
      server: $.config.build
    });

    $.browserSync.watch([$.config.build + '/*.html', $.config.build + '/styles/*.css', $.config.build + '/scripts/*.js'], $.browserSync.reload);
  });
};
