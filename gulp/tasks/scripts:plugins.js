"use strict";
module.exports = function() {
  $.gulp.task("scripts:plugins", function() {
    return $.gulp
      .src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/tether/dist/js/tether.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
        'node_modules/air-datepicker/dist/js/datepicker.min.js',//have css
        'node_modules/country-select-js/build/js/countrySelect.min.js', //have css and img
        'node_modules/jquery-modal/jquery.modal.min.js', //have css
        'node_modules/social-buttons/src/js/SocialButtons.js',//have css and icons
      ])
      .pipe($.p.plumber())
      .pipe($.p.babel())
      .pipe($.p.concat("plugins.js"))
      .pipe($.p.uglify())
      .pipe($.gulp.dest($.config.build + "/scripts"));
  });
};
