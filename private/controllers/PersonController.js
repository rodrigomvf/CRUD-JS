(function () {
    'use strict';

    var persons = [
        {   _id: 1,
            name: 'Contact example 1',
            cpf: '000.000.000-00',
            birthday: '09-05-1989',
            address: [
                {
                    street: 'Rua carijos',
                    neighborhood: 'Bom Cidade',
                    telephone: '99184-9826'
                },
                {
                    street: 'Rua aimoressss',
                    neighborhood: 'Bom Jarerdim',
                    telephone: '99184-9826'
                },
                {
                    street: 'Rua aimoresdfdf',
                    neighborhood: 'Bom Jardim',
                    telephone: '99184-9826'
                }
            ],
            login: 'astesio',
            password: 'teste1'

        }
    ];

    var PersonController = function (app) {
        var jwt         = require('jsonwebtoken'),
            PersonModel = app.models.PersonModel,
            person      = {};

        person.authenticate = function (request, response) {
            PersonModel.findOne({login: request.body.login, password: request.body.password}, function (error, user) {
                if(error) {
                    response.json({
                        type: false,
                        data: 'Error occurred: ' + error
                    });
                } else {
                    if(user) {
                        response.json({
                            type: true,
                            data: user,
                            token: user.token
                        });
                    } else {
                        response.json({
                            type: false,
                            data: 'Incorrect email or password'
                        });
                    }
                }
            });
        };

        person.signIn = function (request, response) {
            PersonModel.findOne({login: request.body.login, password: request.body.password}, function (error, user) {
                if(error) {
                    response.json({
                        type: false,
                        data: 'Error occurred: ' + error
                    });
                } else {
                    if(user) {
                        response.json({
                            type: false,
                            data: 'User already exists!'
                        });
                    } else {
                        var userModel = new PersonModel();
                        userModel.login = request.body.login;
                        userModel.password = request.body.password;

                        userModel.save(function (error, user) {
                            user.token = jwt.sign(user, process.env.JWT_SECRET);
                            user.save(function (error, otherUser) {
                                response.json({
                                    type: true,
                                    data: otherUser,
                                    token: otherUser.token
                                });
                            });

                        });
                    }
                }

            });
        };

        person.getAddress = function (request, response) {
            //PersonModel.findOne({token: request.token}, function (error, user) {
            //    if(error) {
            //        response.json({
            //            type: false,
            //            data: 'Error occurred: ' + error
            //        });
            //    } else {
            //        response.json({
            //            type: true,
            //            data: user
            //        });
            //    }
            //});
            response.json(persons);
        };

        person.ensureAuthorized = function (request, response, next) {
            var bearerToken;
            var bearerHeader = request.headers['authorization'];
            if (typeof bearerHeader !== 'undefined') {
                var bearer = bearerHeader.split(' ');
                bearerToken = bearer[1];
                request.token = bearerToken;
                next();
            } else {
                request.send(403);
            }
        };


        //person.savePerson = function (request, response) {
        //    var _id = request.body._id;
        //    if (_id) {
        //        PersonModel.findByIdAndUpdate(_id, request.body).exec()
        //            .then(function (personUpdate) {
        //                response.json(personUpdate);
        //            }, function (error) {
        //                console.error(error);
        //                response.status(500).json(error);
        //            });
        //    } else {
        //        PersonModel.create(request.body)
        //            .then(function (personCreate) {
        //                response.status(201).json(personCreate);
        //            }, function (error) {
        //                console.log(error);
        //                response.status(500).json(error);
        //            });
        //    }
        //};
        return person;
    };

    module.exports = PersonController;
})();

