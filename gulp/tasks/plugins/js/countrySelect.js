"use strict";

module.exports = function() {
  $.gulp.task("countrySelect:js", function() {
    return $.gulp
      .src('node_modules/country-select-js/build/js/countrySelect.min.js')
      .pipe($.gulp.dest($.config.src + "/js/plugins/"));
  });
};
