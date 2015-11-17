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
                model: '@',
            },
            controller: function($scope, $injector, $location) {
                $scope.registers = [];

                var persons = [
                    {
                        "_id": "1",
                        "name" : "Astesio Jose do Carmo Junior",
                        "cpf": "000.000.000-00",
                        "birthday": "1989-05-09",
                        "address": [
                            {
                                "_id": "1",
                                "street": "Aimores 41",
                                "neighborhood": "Bom Jaridim",
                                "telephone": "991949826"
                            },
                            {
                                "_id": "2",
                                "street": "Pernambuco 76",
                                "neighborhood": "Florestal",
                                "telephone": "37124692"
                            }
                        ]
                    }
                ];

                angular.forEach(persons, function (value, key) {
                    angular.forEach(value.address, function (value, key) {
                        $scope.registers.push(value);
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
