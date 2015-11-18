(function () {
    'use strict';

    var express 			= require('express'),
        load 				= require('express-load'),
        bodyParser 			= require('body-parser'),
        path                = require('path');


    module.exports = function() {

        var app	= express();

        // variable environment
        app.set('port', process.env.PORT || 3000);

        app.use(function (request, response, next) {
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            response.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

            next();
        });

        // variable environment middlewares
        app.use(express.static(path.join(__dirname, 'public')));

        app.set('views', './private/views');
        app.set('view engine', 'ejs');

        app.use(bodyParser.urlencoded({ extended: true}));
        app.use(bodyParser.json());
        app.use(require('method-override')());


        load('models', {cwd: 'private'})
            .then('controllers')
            .then('routes')
            .into(app);

        return app;
    };

})();
