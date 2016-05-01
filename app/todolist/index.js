import angular from 'angular'

const todolistModule = angular.module('app.todolist', [])

import statesProvide from './states.js'
statesProvide(todolistModule)

import duckProvide from './todolist.duck.js'
duckProvide(todolistModule)

export default todolistModule.name
