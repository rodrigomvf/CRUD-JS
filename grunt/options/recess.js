(function () {
    'use strict';

    module.exports = {
        staging: {
            src: [
                '<%= scaffold.staging.assets %>/css/**/*.css',
                '!<%= scaffold.staging.assets %>/css/{CRUD-JS,default,overrides,theme-CRUD-JS}.css'
            ]
        },
        options: {
            noIDs: true,
            noJSPrefix: true,
            noOverqualifying: false,
            noUnderscores: true,
            noUniversalSelectors: false,
            prefixWhitespace: true,
            strictPropertyOrder: false,
            zeroUnits: true
        }
    };
})();
