(function () {

    'use strict';

    module.exports = {
        nodemon: {
            dev: {
                script: '<%= scaffold.dev.server %>/Server.js'
            }
        }
    };

})();
