(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.registerTask('default', [
            'clean:staging',
            'copy:staging',
            //'imagemin:static',
            //'sass',
            'autoprefixer:staging',
            'newer:copy:stagingHtml',
            'prettify',
            'wiredep:staging',
            'browserSync:staging',
            'watch'
        ]);
    };
})();
