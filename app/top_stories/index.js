import angular from 'angular'

const topStories = angular.module('app.topStories', [])

import statesProvide from './states.js'
statesProvide(topStories)

export default topStories.name
