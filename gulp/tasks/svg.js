"use strict";

module.exports = function() {
  $.gulp.task("svg", function() {
    return ($.gulp.src('/src/assets/icons/*.svg')
        // минифицируем svg
        .pipe($.p.svgmin({
            js2svg: {
              pretty: true
            }
          })
        )
        .pipe($.p.cheerio({
            run: function($) {
              $("[fill]").removeAttr("fill");
              $("[stroke]").removeAttr("stroke");
              $("[style]").removeAttr("style");
            },
            parserOptions: {
              xmlMode: true
            }
          })
        )
        // cheerio плагин заменит, если появилась, скобка '&gt;', на нормальную.
        .pipe($.p.replace("&gt;", ">"))
        // build svg sprite
        .pipe(
          $.p.svgSprite({
            mode: {
              symbol: {
                sprite: "../sprite.svg"
              }
            }
          })
        )
        .pipe($.gulp.dest($.config.build + "/img")) );
  });
};
