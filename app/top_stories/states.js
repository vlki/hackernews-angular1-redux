import template from './top_stories.html'
import controller from './top_stories.controller.js'

setupStates.$inject = ['$stateProvider']

function setupStates($stateProvider) {
    $stateProvider
        .state('topStories', {
            url: '/',
            templateUrl: template,
            controller: controller,
            controllerAs: 'vm'
        })
}

export default function provide(ngModule) {
    ngModule.config(setupStates)
}
