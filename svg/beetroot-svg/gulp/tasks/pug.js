module.exports = function () {

    $.gulp.task('pug', function () {
        return $.gulp.src(path.pages + '/**/*.pug')
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest(path.build))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};