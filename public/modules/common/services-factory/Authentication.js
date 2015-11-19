(function () {
    'use strict';

    var Authentication = function ($http, $localStorage, BASE_REST_URL) {

        function changeUser(user) {
            angular.extend(currentUser, user);
        }

        function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output);
        }

        function getUserFromToken() {
            var token = $localStorage.token;
            var user = {};
            if (typeof token !== 'undefined') {
                var encoded = token.split('.')[1];
                user = JSON.parse(urlBase64Decode(encoded));
            }
            return user;
        }

        var currentUser = getUserFromToken();

        return {
            save: function(data, success, error) {
                $http.post(BASE_REST_URL + '/signin', data).success(success).error(error);
            },
            signin: function(data, success, error) {
                $http.post(BASE_REST_URL + '/authenticate', data).success(success).error(error);
            },
            me: function(success, error) {
                $http.get(BASE_REST_URL + '/me').success(success).error(error);
            },
            logout: function(success) {
                changeUser({});
                delete $localStorage.token;
                success();
            }
        };
    };

    angular.module('CRUD-JS')
        .factory('Authentication', Authentication);
})();
