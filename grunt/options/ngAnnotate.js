(function () {
    'use strict';

    module.exports = {
        options: {
            singleQuotes: true,
        },
        build: {
            files: [{
                dot: true,
                expand: true,
                cwd: '<%= scaffold.tmp.path %>',
                dest: '<%= scaffold.tmp.path %>',
                src: ['**/*.js']
            },
            {
                dot: true,
                expand: true,
                cwd: '<%= scaffold.build.modules %>',
                dest: '<%= scaffold.build.modules %>',
                src: ['**/*.js']
            }]
        }
    };
})();
