module.exports = function () {
    $.gulp.task('server', function () {
        $.bs.init({
            server: {
                baseDir: "build"
            }
        });
    });
};