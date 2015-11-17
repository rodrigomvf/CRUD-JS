(function () {
    'use strict';

    var http    = require('http'),
        app     = require('./config/express')();
    require('./config/database.js')('mongodb://localhost/crudjs');


    http.createServer(app)
        .listen(app.get('port'), function () {
            console.log('Express Server run at port ' + app.get('port'));
        });

})();
