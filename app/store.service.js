import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createLogger from 'redux-logger'

storeFactory.$inject = ['reducerRegistry']

function storeFactory(reducerRegistry) {
    let reducers = reducerRegistry.getReducers()

    if (Object.keys(reducers).length === 0) {
        // Create empty reducer
        reducers = (state = {}, action) => {
            return state
        }
    }

    const logger = createLogger()

    const store = createStore(
        combineReducers(reducers),
        compose(
            applyMiddleware(logger),

            // If there is Redux dev tools extension, connect to it
            // See https://github.com/zalmoxisus/redux-devtools-extension#2-use-with-redux
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

    reducerRegistry.setChangeListener((reducers) => {
        store.replaceReducer(combineReducers(reducers))
    })

    return store
}

export default function provide(ngModule) {
    ngModule.factory('store', storeFactory)
}
