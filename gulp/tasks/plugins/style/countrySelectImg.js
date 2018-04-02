"use strict";

module.exports = function() {
  $.gulp.task("countrySelect:img", function() {
    return $.gulp
      .src(['node_modules/country-select-js/build/img/flags.png','node_modules/country-select-js/build/img/flags@2x.png'])
      .pipe($.gulp.dest($.config.src + "/assets/img"));
  });
};
