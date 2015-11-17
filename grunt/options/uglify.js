(function () {
    'use strict';

    module.exports = {
        options: {
            banner: '<%= banner %>',
            compress: {
                'warnings': false
            },
            beautify: false,
            report: 'min',
            expression: false,
            maxLineLen: 32000,
            ASCIIOnly: false,
            screwIE8: false,
            quoteStyle: 0
        },
        modules: {
            files: [{
                expand: true,
                cwd: '<%= scaffold.build.modules %>',
                src: '**/*.js',
                dest: '<%= scaffold.build.modules %>'
            }]
        }
    };
})();
