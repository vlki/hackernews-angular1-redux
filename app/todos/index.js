import angular from 'angular'

const todosModule = angular.module('app.todos', [])

import duckProvide from './todos.duck.js'
duckProvide(todosModule)

export default todosModule.name
