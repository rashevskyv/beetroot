module.exports = function () {
    $.gulp.task('stylus-lib', function () {
        return $.gulp.src(path.stylus + '/libs.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 5 versions'],
                cascade: false
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>"
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso({
                sourceMap: true
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest(path.build + '/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task('stylus-lib:dev', function () {
        return $.gulp.src(path.stylus + '/libs.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 5 versions'],
                cascade: false
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>"
            }))
            .pipe($.gp.csscomb())
            .pipe($.gulp.dest(path.build + '/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task('stylus', function () {
        return $.gulp.src(path.stylus + '/main.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 5 versions'],
                cascade: false
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>"
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest(path.build + '/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
};