(function() {

    'use strict';

    var cpDynamicName = function($parse, $compile) {
        return {
            restrict: 'A',
            priority: 1400,
            terminal: true,
            link: function(scope, elem) {
                var name = $parse(elem.attr('cp-dynamic-name'))(scope);

                elem.removeAttr('cp-dynamic-name').attr('name', name);

                $compile(elem)(scope);
            }
        };
    };

    var cpDynamicModel = function($parse, $compile) {
        return {
            restrict: 'A',
            priority: 1500,
            terminal: true,
            link: function(scope, elem) {
                var model = $parse(elem.attr('cp-dynamic-model'))(scope);

                elem.removeAttr('cp-dynamic-model').attr('ng-model', '$parent.' + model);

                $compile(elem)(scope);
            }
        };
    };

    var cpDynamicMask = function($parse, $compile) {
        return {
            restrict: 'A',
            priority: 1600,
            terminal: true,
            link: function(scope, elem) {
                var mask = $parse(elem.attr('cp-dynamic-mask'))(scope);

                elem.removeAttr('cp-dynamic-mask');

                if (typeof mask !== 'undefined' && mask !== '') {
                    elem.attr(mask, '');
                }

                $compile(elem)(scope);
            }
        };
    };



    angular.module('CRUD-JS')
        .directive('cpDynamicName', cpDynamicName)
        .directive('cpDynamicModel', cpDynamicModel)
        .directive('cpDynamicMask', cpDynamicMask);


})();
