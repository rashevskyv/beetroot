'use strict';

var del = require('del');

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')

    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

global.path = {
    pages: 'src/pug/pages',
    pug: 'src/pug',
    img: 'src/static/img',
    svg: 'src/static/img/svg',
    svgsprt: 'src/static/img/svg-sprite',
    imgraw: 'src/static/img-raw',
    stylus: 'src/static/stylus',
    js: 'src/static/js',
    libs: 'node_modules',
    build: 'build'
};

$.gulp.task('clean', function () {
    return del(path.build + '/*');
});

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('clean'),
    $.gulp.parallel('pug', 'stylus', 'stylus-lib', 'scripts-lib', 'scripts', 'img', 'imgraw', 'svg', 'svg:sprite'),
    $.gulp.parallel('server')
));

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'stylus', 'stylus-lib:dev', 'scripts-lib:dev', 'scripts', 'img:dev', 'imgraw', 'svg:sprite'),
    $.gulp.parallel('watch', 'server')
));
