(function () {
    'use strict';

    var PersonRouter = function (app) {
        var person = app.controllers.PersonController;

        app.route('authenticate')
            .post(person.authenticate);

        app.route('/signin')
            .post(person.signIn);

        app.route('/address')
            .get(person.ensureAuthorized, person.getAddress);

        app.route('/person')
            .get(person.getAddress)
            .post(person.savePerson);

        app.route('/person/:id')
            .delete(person.removeAddress);


    };

    module.exports = PersonRouter;
})();
