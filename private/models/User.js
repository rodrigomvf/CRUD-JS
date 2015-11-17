(function () {
    'use strict';

    var mongoose = require('mongoose');

    module.exports = function () {

        var scheme = mongoose.Schema({
            login: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            status: {
                type: Boolean,
                required: true
            }
        });

        return mongoose.model('User', scheme);

    };

})();
