(function () {
    'use strict';

    var cpFooter = function () {
        return {
            templateUrl: 'modules/common/directives/cpFooter/cp-footer.html' ,
            restrict: 'E',
            controller: function($scope) { // VersionFactory

                 //VersionFactory.get(function(data){
                 //    $scope.version = data;
                 //});

            }
        };
    };

    angular.module('CRUD-JS')
        .directive('cpFooter', cpFooter);
})();
