(function() {

    'use strict';

    var picker = function($translate, $filter) {
        return function(value, filterName, pattern) {
            if (typeof filterName === 'undefined') {
                return value;
            } else {
                return $filter(filterName)(value, pattern);
            }
        };
    };

    angular.module('CRUD-JS')
        .filter('picker', picker);

})();
