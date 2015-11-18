(function () {

    var UserService = function ($resource, BASE_REST_URL) {
        return $resource(BASE_REST_URL + 'person', {}, {
            update: {
                method: 'PUT'
            },
            query: {
                isArray: false
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    };

    var UserServiceQuery = function ($resource, BASE_REST_URL) {
        return $resource(BASE_REST_URL + 'person', {}, {
            update: {
                method: 'GET'
            },
            query: {
                isArray: false
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    };

    var UserServiceSingle = function($resource, BASE_REST_URL) {
        return $resource(BASE_REST_URL + 'person/:id', {
            id: '@id'
        }, {
            update: {
                method: 'DELETE'
            },
            query: {
                isArray: false
            },
            headers:{
                'Access-Control-Allow-Origin' : '*'
            }
        });
    };

    angular.module('CRUD-JS.User')
        .service('UserService', UserService)
        .service('UserServiceQuery', UserServiceQuery)
        .service('UserServiceSingle', UserServiceSingle);
})();
