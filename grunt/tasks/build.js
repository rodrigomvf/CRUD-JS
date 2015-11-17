(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.registerTask('build', [
            'clean:build',
            'copy:buildHtml',
            //'imagemin:static',
            //'sass',
            'cmq',
            'autoprefixer:build',
            'svgmin',
            'json-minify',
            'modernizr',
            'wiredep:build',
            'useminPrepare',
            'concat',
            'ngAnnotate',
            'uglify',
            'csso',
            'copy:build',
            'cssmin',
            'imageoptim',
            'imageEmbed',
            'rev',
            'usemin',
            'htmlmin',
            'compress',
            'clean:tmp'
        ]);
    };
})();
