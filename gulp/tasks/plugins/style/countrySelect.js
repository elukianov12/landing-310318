"use strict";

module.exports = function() {
  $.gulp.task("countrySelect:style", function() {
    return $.gulp
      .src('node_modules/country-select-js/build/css/countrySelect.min.css')
      .pipe(
        $.p.rename({
          extname: ".scss"
        })
      )
      .pipe($.gulp.dest($.config.src + "/sass/libs/"));
  });
};
