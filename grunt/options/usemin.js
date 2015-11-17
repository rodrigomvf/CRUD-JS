(function () {
    'use strict';

    module.exports = {
        options: {
            assetsDirs: ['<%= scaffold.build.path %>'],
            dirs: ['<%= scaffold.build.path %>'],
            patterns: {
                js: [
                    [/(modules\/.*?\.(?:js|css|html))/gm, 'Update the JS to reference our revved lazyloaded modules']
                ]
            }
        },
        html: ['<%= scaffold.build.path %>/**/*.html'],
        js: ['<%= scaffold.build.path %>/**/*.js']
    };
})();
