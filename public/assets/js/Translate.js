(function () {
    'use strict';

    var TranslateProvider = function ($translateProvider) {
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.useStaticFilesLoader({
            prefix: 'modules/common/languages/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('pt_BR');
    };

    angular.module('CRUD-JS')
        .config(TranslateProvider);

})();

