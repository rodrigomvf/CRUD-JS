(function () {
    'use strict';

    module.exports = function (app) {

        var Person = app.models.Person,
            person = {};

        person.getAddress = function (request, response) {
            Person.find().exec()
                .then(function (address) {
                    response.json(address);
                }, function (error) {
                    console.log(error);
                    response.status(500);
                });
        };

        person.getItemAddress = function (request, response) {

            if(!request.headers.authorization) {
                return response.status(401).send({
                    message: 'You are not authorized'
                });
            }

            var _id = request.params.id;

            Person.findById(_id).exec()
                .then(function (bar) {
                    if(!bar) {
                        throw new Error('Bar don\'t search');
                    }
                    response.json(bar);
                }, function (error) {
                    console.log(error);
                    response.status(404).json(error);
                });
        };

        return person;

    };
})();
