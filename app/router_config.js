'use strict';

routerConfig.$inject = ['$urlRouterProvider', '$locationProvider']

function routerConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/')
    $locationProvider.html5Mode(true)
}

export default function provide(ngModule) {
    ngModule.config(routerConfig)
};
