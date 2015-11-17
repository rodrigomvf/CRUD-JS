(function () {
    'use strict';

    module.exports = {
        build: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },

            files: {
                src: [
                    '<%= scaffold.build.assets %>/img/**/*.{png, jpg, gif}',
                    '<%= scaffold.build.assets %>/**/*.js',
                    '<%= scaffold.build.modules %>/**/*.{js,css,html}',
                    '<%= scaffold.build.assets %>/**/*.css',
                    '<%= scaffold.build.path %>/*.{ico,png,gif}'
                ]
            }
        }
    };
})();
