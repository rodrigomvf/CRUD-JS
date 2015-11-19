(function () {
    'use strict';

    var LoginController =  function ($rootScope, $scope, $location, $localStorage, Authentication) {
        $scope.preSave = function() {
            console.log('Run after');
        };
    };

    angular.module('CRUD-JS.Login')
        .controller('LoginController', LoginController);
})();
