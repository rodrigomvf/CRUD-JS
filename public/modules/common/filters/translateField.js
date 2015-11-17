(function() {

    'use strict';

    var translateField = function($translate) {
        return function(input) {
            return $translate.instant(input);
        };
    };

    var translateLowCaseField = function($translate) {
        return function(input) {
            return $translate.instant(input.toLowerCase());
        };
    };

    var translateVariableField = function($translate) {
        return function(input, variable) {
            input = $translate.instant(input);

            return input.replace('{0}', variable.value);
        };
    };

    angular.module('CRUD-JS')
        .filter('translateField', translateField)
        .filter('translateLowCaseField', translateLowCaseField)
        .filter('translateVariableField', translateVariableField);

})();
