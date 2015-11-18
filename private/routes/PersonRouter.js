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


    };

    module.exports = PersonRouter;
})();
