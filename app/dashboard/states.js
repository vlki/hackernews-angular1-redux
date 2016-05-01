import template from './dashboard.html'
import controller from './dashboard.controller.js'

setupStates.$inject = ['$stateProvider']

function setupStates($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: template,
            controller: controller,
            controllerAs: 'vm'
        })
}

export default function provide(ngModule) {
    ngModule.config(setupStates)
}
