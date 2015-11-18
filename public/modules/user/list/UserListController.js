(function () {

    var UserListController = function ($scope, UserServiceQuery) {
        UserServiceQuery.get(function(data) {
            $scope.test = data;
        });

        //$scope.address = [];

        //$scope.editRegister = function (register) {
        //    console.log(' voce clicou no botão edit' + register);
        //};
        //
        //$scope.confirmReg = function (register) {
        //    console.log('Você clicou no botão remover'+ register);
        //};


        //angular.forEach(persons, function (value, key) {
        //    angular.forEach(value.address, function (value, key) {
        //        $scope.address.push(value);
        //    });
        //});
    };



    angular.module('CRUD-JS.User')
        .controller('UserListController', UserListController);
})();
