(function () {

    'use strict';

    var PersonModel = function () {
        var mongoose = require('mongoose');

        var PersonScheme   = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            cpf: {
                type: String,
                required: true
            },
            birthday: {
                type: Date,
                required: true
            },
            address: {
                type: Array,
                required: true
            },
            login: String,
            password: String,
            token: String
        });

        return mongoose.model('Person', PersonScheme);
    };

    module.exports = PersonModel;

})();
