import * as todos from '../todos/todos.duck.js'
import * as visibilityFilter from './visibility_filter.duck.js'
import * as todo from '../todos/todo.duck.js'

TodolistController.$inject = ['$scope', 'store']

export default function TodolistController($scope, store) {
    const vm = this

    vm.todos
    vm.newTodo = ''
    vm.addTodo = addTodo

    vm.visibilityFilter
    vm.setVisibilityFilter = setVisibilityFilter

    vm.toggleTodo = toggleTodo

    activate()

    /////

    function activate() {
        let unsubscribe = store.subscribe(() => $scope.$applyAsync(_updateScopeFromState))
        _updateScopeFromState()

        $scope.$on('$destroy', unsubscribe)
    }

    function _updateScopeFromState() {
        var state = store.getState()

        vm.todos = _visibleTodosOnly(state.todos, state.todolist.visibilityFilter)
        vm.visibilityFilter = state.todolist.visibilityFilter
    }

    function _visibleTodosOnly(todos, visibilityFilter) {
        switch (visibilityFilter) {
            case 'SHOW_ALL':
                return todos

            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed)

            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed)
        }
    }

    function addTodo() {
        store.dispatch(todos.addTodo(vm.newTodo))
        vm.newTodo = ''
    }

    function setVisibilityFilter(filter) {
        store.dispatch(visibilityFilter.setVisibilityFilter(filter))
    }

    function toggleTodo(id) {
        store.dispatch(todo.toggleTodo(id))
    }
}
