(function () {
    'use strict';

    var cpTable = function () {
        return {
            templateUrl: 'modules/common/directives/cpTable/cp-table.html',
            restrict: 'E',
            scope: {
                factoryName: '@',
                deleteFactory: '@',
                ngModel: '=',
                fld: '=',
                appPath: '@',
                edit: '@',
                remove: '@',
                model: '@'
            },
            controller: function($rootScope, $scope, $injector, $location, $translate, $timeout, $filter, $parse, $stateParams) {

                $scope.registers = {};
                $scope.register = [];

                $scope.factory = $injector.get($scope.factoryName);


                $scope.loadingPromise = $scope.factory.query(function (success) {
                        $scope.registers = success;

                        angular.forEach($scope.registers.address, function (value, key) {
                            $scope.register.push(value);
                        });
                });


                $scope.newRegister = function() {
                    $location.path('/'+ $scope.appPath + '/new');
                };

                $scope.editRegister = function(register) {
                    $location.path('/'+ $scope.appPath + '/edit' + '/' + register._id);
                };

                $scope.removeReg = function(register) {
                    $scope.factoryDelete = $injector.get($scope.deleteFactory);

                    $scope.factoryDelete.delete({
                        id: register._id
                    }).$promise.then(function(data) {
                            console.log('Você deletou o registro ' + register._id);
                        },
                        function(error) {
                           console.log(error);
                        });
                };

            }
        };
    };


    angular.module('CRUD-JS')
        .directive('cpTable', cpTable);
})();
