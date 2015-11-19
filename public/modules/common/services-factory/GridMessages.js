(function () {
    'use strict';

    var MessageGrid = function ($rootScope, $timeout) {
        var msgTimeout;

        return function(type, title, description, timeout) {
            $rootScope.messages = {
                type: type,
                title: title,
                description: description,
                show: true
            };

            $timeout.cancel(msgTimeout);

            msgTimeout = $timeout(function() {
                $rootScope.messages.show = false;
            }, timeout || 5000);
        };
    };


    angular.module('CRUD-JS')
        .service('MessageGrid', MessageGrid);

})();
