(function () {
    'use strict';

    var LoginService = function ($resource, BaseRestUrl) {
        return $resource(BaseRestUrl + '/signin', {}, {
            update: {
                method: 'POST'
            },
            query: {
                isArray: false
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    };

    angular.module('CRUD-JS.Login')
        .service('LoginService', LoginService);
})();
