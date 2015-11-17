(function () {

    var UserListController = function ($scope) {

        //$scope.address = [];

        //$scope.editRegister = function (register) {
        //    console.log(' voce clicou no botão edit' + register);
        //};
        //
        //$scope.confirmReg = function (register) {
        //    console.log('Você clicou no botão remover'+ register);
        //};

        //var persons = [
        //    {
        //        "name" : "Astesio Jose do Carmo Junior",
        //        "cpf": "000.000.000-00",
        //        "birthday": "1989-05-09",
        //        "address": [
        //            {
        //                "street": "Aimores 41",
        //                "neighborhood": "Bom Jaridim",
        //                "telephone": "991949826"
        //            },
        //            {
        //                "street": "Pernambuco 76",
        //                "neighborhood": "Florestal",
        //                "telephone": "37124692"
        //            }
        //        ]
        //    },
        //    {
        //        "name" : "Astesio Jose do Carmo Junior",
        //        "cpf": "000.000.000-00",
        //        "birthday": "1989-05-09",
        //        "address": [
        //            {
        //                "street": "Romão Martins 300",
        //                "neighborhood": "Cebola",
        //                "telephone": "252315204522"
        //            },
        //            {
        //                "street": "Cruzeiro 1096",
        //                "neighborhood": "Pampulia",
        //                "telephone": "232432"
        //            }
        //        ]
        //    },
        //    {
        //        "name" : "Astesio Jose do Carmo Junior",
        //        "cpf": "000.000.000-00",
        //        "birthday": "1989-05-09",
        //        "address": [
        //            {
        //                "street": "Abrão caram 434",
        //                "neighborhood": "Mineirão",
        //                "telephone": "3443434343434"
        //            },
        //            {
        //                "street": "Cristiano machado",
        //                "neighborhood": "Avenida",
        //                "telephone": "33232323"
        //            }
        //        ]
        //    },
        //    {
        //        "name" : "Astesio Jose do Carmo Junior",
        //        "cpf": "000.000.000-00",
        //        "birthday": "1989-05-09",
        //        "address": [
        //            {
        //                "street": "Puc Minas",
        //                "neighborhood": "Cenectista",
        //                "telephone": "4309423092039"
        //            },
        //            {
        //                "street": "Nova cidade",
        //                "neighborhood": "Itaipava",
        //                "telephone": "371324343"
        //            }
        //        ]
        //    }
        //];

        //angular.forEach(persons, function (value, key) {
        //    angular.forEach(value.address, function (value, key) {
        //        $scope.address.push(value);
        //    });
        //});
    };



    angular.module('CRUD-JS.User')
        .controller('UserListController', UserListController);
})();
