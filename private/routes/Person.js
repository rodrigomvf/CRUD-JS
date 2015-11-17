(function () {
    'use strict';

    module.exports = function (app) {

        var person = app.controllers.Person;

        app.route('/address')
            .get(person.getAddress);

        app.route('/address/:id')
            .get(person.getItemAddress);
    };

})();
