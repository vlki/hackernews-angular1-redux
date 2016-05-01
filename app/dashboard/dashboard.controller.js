import * as actions from './actions'
import {
    getMaxPage,
    getCurrentPageTopStories
} from './selectors'

TodolistController.$inject = ['$scope', 'store']

export default function TodolistController($scope, store) {
    const vm = this

    vm.nextPage = nextPage
    vm.prevPage = prevPage

    activate()

    /////

    function activate() {
        let unsubscribe = store.subscribe(() => $scope.$applyAsync(_updateScopeFromState))
        $scope.$on('$destroy', unsubscribe)

        _loadData()
        _updateScopeFromState()
    }

    function _loadData() {
        store.dispatch(actions.fetchTopStoriesIfNeeded())
    }

    function _updateScopeFromState() {
        let { topStories, entities } = store.getState()

        vm.isLoading = topStories.isFetching
        vm.page = topStories.page
        vm.maxPage = getMaxPage(topStories)
        vm.topStories = getCurrentPageTopStories(topStories, entities.items)
    }

    function nextPage() {
        _setPage(vm.page + 1)
    }

    function prevPage() {
        _setPage(vm.page - 1)
    }

    function _setPage(page) {
        store.dispatch(actions.setPage(page))
        store.dispatch(actions.fetchTopStoriesIfNeeded())
    }
}
