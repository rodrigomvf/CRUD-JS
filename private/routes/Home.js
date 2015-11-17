(function () {
    'use strict';

    module.exports = function (app) {
        var controller = app.controllers.Home;

        app.get('/', controller.index);
        app.get('/index', controller.index);
    };
})();
