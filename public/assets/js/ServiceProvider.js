(function () {
    'use strict';

        var baseRestUrl = 'http://45.55.197.115:3000/';

        if (window.location.hostname === 'localhost') {
            baseRestUrl = 'http://localhost:3000/';
        }

    angular.module('CRUD-JS')
        .constant('BASE_REST_URL', baseRestUrl);
})();
