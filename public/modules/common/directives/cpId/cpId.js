(function() {

    'use strict';

    var cpId = function() {
        return {
            templateUrl: 'modules/common/directives/cpId/cp-id.html',
            restrict: 'E',
            replace: true,
            scope: {
                model: '@',
                fields: '@',
                help: '@',
                labelSize: '@'
            }
        };
    };

    angular.module('CRUD-JS')
        .directive('cpId', cpId);

})();
