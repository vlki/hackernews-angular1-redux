import template from './todolist.html'
import controller from './todolist.controller.js'

setupStates.$inject = ['$stateProvider']

function setupStates($stateProvider) {
    $stateProvider
        .state('todolist', {
            url: '/',
            templateUrl: template,
            controller: controller,
            controllerAs: 'vm'
        })
}

export default function provide(ngModule) {
    ngModule.config(setupStates)
}
