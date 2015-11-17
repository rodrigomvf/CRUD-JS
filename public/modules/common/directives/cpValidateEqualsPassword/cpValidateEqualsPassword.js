(function () {
    'use strict';

    var cpValidateEquals = function() {
        return {
            require: 'ngModel',
            //templateUrl: 'modules/common/directives/oBarValidateEqualsPassword/o-bar-validate-equals-password.html',
            //restrict: 'A',
            //scope: {
            //
            //},
            link: function(scope, element, attrs, ngModelCtrl) {
                function cpValidateEqual(value) {
                    var valid = (value === scope.$eval(attrs.cpValidateEquals));
                    ngModelCtrl.$setValidity('equal', valid);
                    return valid ? value : undefined;
                }
                ngModelCtrl.$parsers.push(cpValidateEqual);
                ngModelCtrl.$formatters.push(cpValidateEqual);

                scope.$watch(attrs.cpValidateEquals, function() {
                    ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
                });
            }
        };
    };

    angular.module('CRUD-JS')
        .directive('cpValidateEquals', cpValidateEquals);

})();
