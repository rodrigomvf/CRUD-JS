(function () {
    'use strict';

    var mongoose = require('mongoose');

    module.exports = function (uri) {

        mongoose.connect(uri, { server: { poolSize: 15 } });

        mongoose.connection.on('connected', function () {
            console.log('Mongoose! Connected in ' + uri);
        });

        mongoose.connection.on('disconnected', function () {
            console.log('\nMongoose! Disconnected in ' + uri);
        });

        mongoose.connection.on('error', function (error) {
            console.log('\nMongoose! Error at connection: ' + error);
        });

        process.on('SIGINT', function () {
            mongoose.connection.close(function () {
                console.log('Mongoose! Disconnected for terminal of application');
                process.exit(0);
            });
        });

    };

})();
