"use strict";

module.exports = function() {
  $.gulp.task("sass", function() {
    return $.gulp
      .src('./src/sass/main.sass')
      .pipe($.p.plumber())
      .pipe($.p.sourcemaps.init())
      .pipe($.p.sassGlob())
      .pipe(
        $.p.sass({
          outputStyle: "compressed",
          includePaths: [
            'node_modules/bootstrap/scss',
            'node_modules/air-datepicker/dist/css',
            'node_modules/country-select-js/build/css',
            'node_modules/jquery-modal',
            'node_modules/social-buttons/src/css'
          ]
        })
      )
      .pipe(
        $.p.autoprefixer({
          browsers: ["last 2 versions"],
          cascade: false
        })
      )
      .pipe($.p.csso())
      .pipe($.p.sourcemaps.write())
      .pipe($.gulp.dest($.config.build + "/styles"));
  });
};
