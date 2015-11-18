(function () {

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

    angular.module('CRUD-JS.User')
        .service('UserServiceQuery', UserServiceQuery);
})();
