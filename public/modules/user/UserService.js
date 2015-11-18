(function () {

    var UserServiceQuery = function ($resource, BaseRestUrl) {
        return $resource(BaseRestUrl + 'address', {}, {
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
