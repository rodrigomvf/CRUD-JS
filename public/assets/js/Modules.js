(function() {

    'use strict';

    var ModuleCommonRun = function($rootScope, $ocLazyLoad) {
        $ocLazyLoad.load('CRUD-JS.common');
    };

    var LazyLoadProviderConfig = function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [
                {
                    name: 'CRUD-JS.common',
                    files: [
                        'modules/common/directives/cpHeader/cpHeader.js',
                        'modules/common/directives/cpCompareTo/cpCompareTo.js',
                        'modules/common/directives/cpDynamic/cpDynamic.js',
                        'modules/common/services-factory/Authentication.js',
                        'modules/common/services-factory/GridMessages.js',
                        'modules/common/filters/translateField.js',
                        'modules/common/directives/cpInput/cpInput.js',
                        'modules/common/directives/cpTable/cpTable.js',

                        'modules/common/directives/cpId/cpId.js',
                        'modules/common/directives/cpSave/cpSave.js',
                        'modules/common/directives/cpBreadcrumb/cpBreadcrumb.js',
                        'modules/common/directives/cpValidateEqualsPassword/cpValidateEqualsPassword.js',
                        'modules/common/directives/cpFooter/cpFooter.js'
                    ]
                },
                {
                    name: 'CRUD-JS.Login',
                    serie: true,
                    files: [
                        'modules/login/Login.js',
                        'modules/login/LoginController.js',
                        'modules/login/LoginService.js',
                        'modules/login/new/LoginNewController.js',
                        'modules/login/login/LoginLoginController.js'
                    ]
                },
                {
                    name: 'CRUD-JS.User',
                    serie: true,
                    files: [
                        'modules/user/User.js',
                        'modules/user/UserController.js',
                        'modules/user/UserService.js',
                        'modules/user/list/UserListController.js',
                        'modules/user/new/UserNewController.js',
                        'modules/user/edit/UserEditController.js'
                    ]
                }
            ]
        });
    };

    angular.module('CRUD-JS')
        .run(ModuleCommonRun)
        .config(LazyLoadProviderConfig);

})();
