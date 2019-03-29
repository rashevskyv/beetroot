module.exports = function () {
    $.gulp.task('scripts-lib:dev', function () {
        return $.gulp.src([
            // path.libs + '/jquery/dist/jquery.js',
            path.libs + '/bootstrap/dist/js/bootstrap.js'
            // path.libs + '/fullpage.js/dist/fullpage.js',
            // path.libs + '/fullpage.js/vendors/easings.js',
            // path.libs + '/fullpage.js/vendors/scrolloverflow.js',
            // path.libs + '/slick-carousel/slick/slick.min.js'
        ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest(path.build + '/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts-lib', function () {
        return $.gulp.src([
            // path.libs + '/jquery/dist/jquery.js',
            path.libs + '/bootstrap/dist/js/bootstrap.js'
            // path.libs + '/fullpage.js/dist/fullpage.js',
            // path.libs + '/fullpage.js/vendors/easings.js',
            // path.libs + '/fullpage.js/vendors/scrolloverflow.js',
            // path.libs + '/slick-carousel/slick/slick.min.js'
        ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest(path.build + '/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src(path.js + '/main.js')
            .pipe($.gulp.dest(path.build + '/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    })
};