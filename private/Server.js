(function () {
    'use strict';

    var http    = require('http'),
        app     = require('./config/express')();
    require('./config/database.js')('mongodb://localhost/crudjs');

    process.on('uncaughtException', function(err) {
        console.log(err);
    });

    http.createServer(app)
        .listen(app.get('port'), function () {
            console.log('Express Server run at port ' + app.get('port'));
        });

})();
