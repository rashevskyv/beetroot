module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch(path.pug + '/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch(path.stylus + '/**/*.styl', $.gulp.series('stylus'));
        $.gulp.watch(path.js + '/main.js', $.gulp.series('scripts'));
        $.gulp.watch(path.img + '/**/*', $.gulp.series('img:dev'));
        $.gulp.watch(path.svg + '/**/*', $.gulp.series('svg'));
        $.gulp.watch(path.svgsprt + '/**/*', $.gulp.series('svg:sprite'));
    });
};