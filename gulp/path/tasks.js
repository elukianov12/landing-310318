'use strict';

module.exports = [
    './gulp/tasks/serve.js', //запуск сервера
    './gulp/tasks/watch.js', //слежение за файлами
    './gulp/tasks/clean.js', //очищение папки build
    './gulp/tasks/icons.js', //перенос файлов из папки assets/icons
    './gulp/tasks/pug.js', //обработчик pug
    './gulp/tasks/sass.js',//обработчик sass
    './gulp/tasks/img.js',//перенос и минификация изображений
    './gulp/tasks/scripts.js',//конкатенация, углификация и прогон через бабель
    './gulp/tasks/scripts:plugins.js', //подключение плагинов
    './gulp/tasks/fonts.js', //обработка шрифтов
    './gulp/tasks/fontsConvert.js', //конвертация ттф в вофф2
];