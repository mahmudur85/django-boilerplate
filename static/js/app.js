(function () {
    'use strict';

    angular
        .module('app', [
            'app.config',
            'app.routes',
        ]);

    angular
        .module('app.config', []);

    angular
        .module('app.routes', ['ngRoute']);

    angular
        .module('app')
        .run(run);

    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
        // $http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();