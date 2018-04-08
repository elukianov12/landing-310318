'use strict'
module.exports = function() {
    $.gulp.task("pug", function() {
        return $.gulp
          .src('./src/templates/pages/**/*.pug')
          .pipe($.p.plumber())
          .pipe(
            $.p.pug({
              // pretty: true
            })
          )
          .pipe($.gulp.dest($.config.build));
      })
}