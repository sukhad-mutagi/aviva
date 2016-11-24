(function() {
    'use strict';

    angular
        .module('avivaaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('cg-metrics', {
            parent: 'ops',
            url: '/metrics',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Application Metrics'
            },
            views: {
                'content@': {
                    templateUrl: 'app/admin/metrics/metrics.html',
                    controller: 'CgMetricsMonitoringController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
