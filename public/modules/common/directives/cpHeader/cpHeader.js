(function() {

    'use strict';

    var cpHeader = function() {
        return {
            templateUrl: 'modules/common/directives/cpHeader/cp-header.html',
            restrict: 'E',
            scope: {
                text: '='
            },
            controller: function($scope, $rootScope) {
                $scope.alerts = $rootScope.alerts;

                $scope.$parent.addAlert = function(msg, type) {
                    $scope.alerts.push({
                        msg: msg,
                        type: type
                    });
                };

                $scope.closeAlert = function(index) {
                    $scope.alerts.splice(index, 1);
                };
            }
        };
    };

    angular.module('CRUD-JS')
        .directive('cpHeader', cpHeader);

})();
