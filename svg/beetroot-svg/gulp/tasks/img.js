module.exports = function () {

    $.gulp.task('img:dev', function () {
        return $.gulp.src(path.img + '/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest(path.build + '/img/'))
    });

    $.gulp.task('img', function () {
        return $.gulp.src(path.img + '/**/*.{png,jpg,gif}')
            .pipe($.gp.cache($.gp.tinypng('ZXD7LPWHXjzfQZWXyh421JqWf3trWh4j')))
            .pipe($.gulp.dest(path.build + '/img/'))
    });

    $.gulp.task('imgraw', function () {
        return $.gulp.src(path.imgraw + '/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest(path.build + '/img/'))
    });
};