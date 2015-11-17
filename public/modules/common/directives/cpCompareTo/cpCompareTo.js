(function() {

    'use strict';

    var cpCompareTo = function() {
        return {
            require: 'ngModel',
            scope: {
                otherModelValue: '=compareTo'
            },
            link: function($scope, element, attributes, ngModel) {
                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue === $scope.otherModelValue;
                };

                $scope.$watch('otherModelValue', function() {
                    ngModel.$validate();
                });
            }
        };
    };

    angular.module('CRUD-JS')
        .directive('cpCompareTo', cpCompareTo);

})();
