(function () {
    'use strict';

    var mongoose = require('mongoose');

    module.exports = function () {

        var scheme = mongoose.Schema({
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
            }
        });

        return mongoose.model('Person', scheme);

    };

})();
