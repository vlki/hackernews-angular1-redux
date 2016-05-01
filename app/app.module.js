import 'babel-polyfill'
import angular from 'angular'
import angularUiRouter from 'angular-ui-router'
import dashboard from './dashboard'

const app = angular.module('app', [
    angularUiRouter,
    dashboard
])

import storeProvide from './store.service.js'
storeProvide(app)

import routerConfigProvide from './router_config.js'
routerConfigProvide(app)

import reducerRegistryProvide from './reducer_registry.service.js'
reducerRegistryProvide(app)
