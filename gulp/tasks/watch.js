'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./src/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./src/**/*.sass', $.gulp.series('sass'));
    $.gulp.watch('./src/js/*.js', $.gulp.series('scripts'));
    $.gulp.watch('./src/assets/img/**/*.*', $.gulp.series('img'));
    $.gulp.watch('./src/assets/icons/**/*.*', $.gulp.series('svg'));
    $.gulp.watch(['./src/fonts/**/*.woff', './src/fonts/**/*.woff2'], $.gulp.series('fonts'));
  });
};
