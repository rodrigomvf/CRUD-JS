(function () {
    'use strict';

    module.exports = {
        files: [
            'Gruntfile.js',
            '<%= scaffold.dev.assets %>/js/**/*.js',
            '<%= scaffold.dev.modules %>/**/*.js',
            '<%= scaffold.dev.server %>/**/*.js',
            '<%= scaffold.grunt %>/**/*.js'
        ],
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        }
    };
})();
