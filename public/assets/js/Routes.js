(function() {

    'use strict';

    var RoutesConfig = function($urlRouterProvider, $stateProvider, $httpProvider) {

            $urlRouterProvider
                .otherwise('/user/list');

            $stateProvider
                .state('root', {
                    abstract: true,
                    templateUrl: 'views/default.html'
                })
                    .state('root.login', {
                        url: '/login',
                        abstract: true,
                        controller: 'LoginController',
                        controllerAs: 'login',
                        templateUrl: 'modules/login/login.html',
                        resolve: {
                            module: function ($ocLazyLoad) {
                                return $ocLazyLoad.load('CRUD-JS.Login');
                            }
                        }
                    })
                        .state('root.login.login', {
                            url: '/',
                            controller: 'LoginLoginController',
                            controllerAs: 'loginLogin',
                            templateUrl: 'modules/login/login/login.html'
                        })
                        .state('root.login.new', {
                            url: '/new',
                            controller: 'LoginNewController',
                            controllerAs: 'newLogin',
                            templateUrl: 'modules/login/new/new.html'
                        })
                    .state('root.user', {
                        url: '/user',
                        breadcrumb: 'BREADCRUMB.USER.USER',
                        abstract: true,
                        controller: 'UserController',
                        controllerAs: 'user',
                        templateUrl: 'modules/user/user.html',
                        resolve: {
                            module: function ($ocLazyLoad) {
                                return $ocLazyLoad.load('CRUD-JS.User');
                            }
                        }
                    })
                        .state('root.user.list', {
                            url: '/list',
                            breadcrumb: 'BREADCRUMB.USER.LIST',
                            controller: 'UserListController',
                            controllerAs: 'userList',
                            templateUrl: 'modules/user/list/list.html'
                        })
                        .state('root.user.new', {
                            url: '/new',
                            breadcrumb: 'BREADCRUMB.USER.NEW',
                            controller: 'UserNewController',
                            controllerAs: 'userNew',
                            templateUrl: 'modules/user/new/new.html'
                        })
                        .state('root.user.edit', {
                            url: '/edit/:id',
                            breadcrumb: 'BREADCRUMB.USER.EDIT',
                            controller: 'UserEditController',
                            controllerAs: 'userEdit',
                            templateUrl: 'modules/user/new/new.html'
                        });


            //$httpProvider.interceptors.push('AuthInterceptor');
    };

    angular.module('CRUD-JS')
        .config(RoutesConfig);

})();
