import angular from 'angular'

const dashboard = angular.module('app.dashboard', [])

import statesProvide from './states.js'
statesProvide(dashboard)

// import duckProvide from './todolist.duck.js'
// duckProvide(dashboard)

export default dashboard.name
