(function () {
    'use strict';

    var HomoController = function () {
        var controller = {};

        controller.index = function (request, response) {
            response.render('index', {name: 'Express'});
        };

        return controller;
    };

    module.exports = HomoController;
})();
