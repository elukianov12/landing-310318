"use strict";

global.$ = {
  package: require("./package.json"),
  config: require("./gulp/config.js"),
  path: {
    task: require("./gulp/path/tasks.js")
  },
  gulp: require("gulp"),
  del: require("del"),
  browserSync: require("browser-sync"),
  p: require("gulp-load-plugins")()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('build', 
  $.gulp.series(
    "clean",
    $.gulp.parallel ( 'fa:fontCopy',
                      'normalize', 
                      'bootstrapStyleCopy',
                      'countrySelect:style',
                      'countrySelect:img',
                      'airDatepicker:style',
                      'socialButtons:style',
                      'socialButtons:img',
                    ),
    $.gulp.parallel ( 'bootstrapJsCopy',
                      'jqueryCopy',
                      'tetherJs',
                      'countrySelect:js',
                      'airDatepicker:js',
                      'socialButtons:js',
                      'smoothScroll:js',
                    ),
    $.gulp.parallel(
        "pug", 
        "sass", 
        "icons", 
        "img",
        $.gulp.series("ttf2woff2","fonts"),
        "scripts",
        "scripts:plugins")
));

$.gulp.task("default",
  $.gulp.series(
    'build',
    $.gulp.parallel(
        'watch',
        'serve'
      )
));
