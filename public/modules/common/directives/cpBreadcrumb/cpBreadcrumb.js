(function() {

    'use strict';

    var cpBreadcrumb = function() {
        return {
            templateUrl: 'modules/common/directives/cpBreadcrumb/cp-breadcrumb.html',
            restrict: 'E',
            scope: {
                classBread: '@'
            }
        };

    };

    angular.module('CRUD-JS')
        .directive('cpBreadcrumb', cpBreadcrumb);

})();
