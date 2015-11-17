(function () {
    'use strict';

    module.exports = {
        imagemin: {
            static: {
                expand: true,
                cwd: '<%= scaffold.dev.assets %>/img',
                src: '**/*.{png, jpg, gif}',
                dest: '<%= scaffold.staging.assets %>/img'
            }
        }
    };

})();
