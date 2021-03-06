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
    $.gulp.parallel(
        "pug", 
        "sass", 
        "icons", 
        "img",
        "scripts",
        "scripts:plugins",
        $.gulp.series("ttf2woff2","fonts"),
      )
));

$.gulp.task("default",
  $.gulp.series(
    'build',
    $.gulp.parallel(
        'watch',
        'serve'
      )
));
