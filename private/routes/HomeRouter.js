(function () {
    'use strict';

    var HomeRouter = function (app) {
        var home = app.controllers.HomeController;

        app.route('/')
            .get(home.index);

        app.route('/index')
            .get(home.index);
    };


    module.exports = HomeRouter;
})();
