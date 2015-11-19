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
                factoryName: '@',
                preSave: '@'
            },
            controller: function($scope, $stateParams, $location, $injector, $translate, MessageGrid) {
                var $parent = $scope.$parent;
                $scope.isEdition = $stateParams.id !== undefined;

                $scope.cancel = function() {
                    $location.path('/' + $scope.path + '/list');
                };

                $scope.save = function() {

                    if ($scope.preSave !== undefined) {
                        var eVal = '$parent.' + $scope.preSave + '()';

                        if ($scope.$eval(eVal)) {
                            return;
                        }
                    }

                    $scope.factory = $injector.get($scope.factoryName);
                    if ($scope.isEdition) {
                         $scope.factory.update($parent[$scope.model], function() {
                            new MessageGrid('success', 'OKAY :)', $translate.instant('MESSAGE.UPDATE_SUCCESS') + ' ' + $parent[$scope.model]._id);
                            $location.path('/' + $scope.path + '/list');
                        }, function(error) {
                             console.log(error);
                             new MessageGrid('warning', 'OPS :(', $translate.instant('MESSAGE.UPDATE_FAILURE') + ' ' + error);
                            $location.path('/' + $scope.path);
                        });
                    } else {
                        $scope.factory.save($parent[$scope.model], function(success) {
                            new MessageGrid('success', 'OKAY :)', $translate.instant('MESSAGE.NEW_SUCCESS') + ' ' + success._id);
                            $location.path('/' + $scope.path);
                        }, function(error) {
                            console.log(error);
                            new MessageGrid('warning', 'OPS :(', $translate.instant('MESSAGE.NEW_FAILURE') + ' ' + error);
                        });
                    }
                };

            }
        };
    };

    angular.module('CRUD-JS')
        .directive('cpSave', cpSave);
})();
