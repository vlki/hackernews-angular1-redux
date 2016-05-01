import { combineReducers } from 'redux'
import visibilityFilter from './visibility_filter.duck.js'

const todolist = combineReducers({
    visibilityFilter
})

export default function provide(ngModule) {
    ngModule.run(['reducerRegistry', (reducerRegistry) => {
        reducerRegistry.register({ todolist })
    }])
}
