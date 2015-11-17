(function() {

    'use strict';

    var cpInput = function() {
        return {
            templateUrl: 'modules/common/directives/cpInput/cp-input.html',
            restrict: 'E',
            scope: {
                inputId: '@',

                type: '@',
                label: '@',
                field: '@',
                labelSize: '@',
                placeholder: '@',
                model: '@',

                required: '@',
                pattern: '@',
                customError: '@',
                requiredMessage: '@',
                patternErrorMessage: '@',
                customErrorMessage: '@',
                conditionalRequired: '@',

                help: '@',
                blur: '@',
                disabled: '@',

                maxLength: '@',
                minLength: '@',

                mask: '@',
                keyUP: '@',

                classLabel: '@',
                classInput: '@',
                classContainerInput: '@'
            },
            controller: function($scope, $parse) {
                $scope.callAction = function() {
                    if (typeof $scope.blur !== 'undefined') {
                        $scope.$eval('$parent.' + $scope.blur + '()');
                    } else {
                        return;
                    }
                };

                $scope.callActionKeyUp = function() {
                    if (typeof $scope.keyup !== 'undefined') {
                        $scope.$eval('$parent.' + $scope.keyup + '()');
                    } else {
                        return;
                    }
                };
            },
            link: function(scope, element, attrs, model) {
                var displayed = false,
                    el = element[0].querySelector('input'),
                    value = '';

                scope.$watch('$parent.' + attrs.model, function(newValue, oldValue, scope) {
                    if (typeof scope !== 'undefined' || typeof scope.$parent !== 'undefined') {
                        return false;
                    }

                    if (typeof scope.$parent !== 'undefined' && attrs.pattern && scope.$parent.form.$error.pattern && displayed === false && newValue !== undefined) {
                        displayed = true;

                        el.value = newValue;
                    }

                    if ((scope.$parent.form !== undefined) && (scope.$parent.form.$error.cpf || scope.$parent.form.$error.cnpj || scope.$parent.form.$error.cep || scope.$parent.form.$error['br-phone-number']) && displayed === false && newValue !== undefined) {
                        displayed = true;

                        el.value = newValue;
                    }

                    value = newValue;

                    if (attrs.mask === 'ui-money-mask' && el.value === '' && value === '') {
                        scope.$parent.form[el.name].$setValidity('required', false);
                    }
                });

                scope.$watch(function() {
                    return scope.conditionalRequired;
                }, function(newValue, oldValue) {
                    if (newValue !== undefined) {
                        var el = element[0].querySelector('input');

                        //Set field as valid or not
                        var valid = newValue === 'false';

                        if (!valid && (value !== undefined && value !== '')) {
                            valid = true;
                        }

                        scope.$parent.form[el.name].$setValidity('required', valid);
                    }
                });
            }
        };
    };

    angular.module('CRUD-JS')
        .directive('cpInput', cpInput);

})();
