module.exports = function () {
    $.gulp.task('svg', () => {
        return $.gulp.src(path.svg + '/**/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gulp.dest(path.build + '/img/'));
    });

    $.gulp.task('svg:sprite', () => {
        return $.gulp.src(path.svgsprt + '/**/*.svg')
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: "sprite.svg",
                        render: {
                            styl: {
                                dest: '../../../../../' + path.stylus + '/_sprite.styl',
                                template: path.stylus + "/_sprite_template.styl"
                            }
                        }
                    }
                }
            }))
            .pipe($.gulp.dest(path.build + '/img/'));
    });
};