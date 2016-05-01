import 'babel-polyfill'
import angular from 'angular'
import angularUiRouter from 'angular-ui-router'
import topStories from './top_stories'

const app = angular.module('app', [
    angularUiRouter,
    topStories
])

import storeProvide from './store.service.js'
storeProvide(app)

import routerConfigProvide from './router_config.js'
routerConfigProvide(app)

import reducerRegistryProvide from './reducer_registry.service.js'
reducerRegistryProvide(app)
