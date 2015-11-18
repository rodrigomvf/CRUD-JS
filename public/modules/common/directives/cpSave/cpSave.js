(function () {
    'use strict';

    var cpSave = function () {
        return {
            templateUrl: 'modules/common/directives/cpSave/cp-save.html',
            restrict: 'E',
            scope: {
                model: '@',
                path: '@',
                classSave: '@',
                classCancel: '@',
                titleSave: '@',
                titleCancel: '@',
                showSave: '@',
                showCancel: '@',
                redirectToEdit: '@',
                click: '@',
                disabled: '@',
                factoryName: '@'
            },
            controller: function($scope, $stateParams, $location, $injector) {
                var $parent = $scope.$parent;
                $scope.isEdition = $stateParams.id !== undefined;

                $scope.cancel = function() {
                    $location.path('/' + $scope.path + '/list');
                };

                $scope.save = function() {
                    $scope.factory = $injector.get($scope.factoryName);
                    if ($scope.isEdition) {
                         $scope.factory.update($parent[$scope.model], function() {
                            console.log($parent[$scope.model].id);
                            $location.path('/' + $scope.path + '/list');
                        }, function() {
                            console.log($parent[$scope.model].id);
                            $location.path('/' + $scope.path);
                        });
                    } else {
                        $scope.factory.save($parent[$scope.model], function(success) {
                            console.log(success.id);
                            $location.path('/' + $scope.path);
                        }, function(error) {
                            console.log(error);
                        });
                    }
                };

            }
        };
    };



    angular.module('CRUD-JS')
        .directive('cpSave', cpSave);
})();
