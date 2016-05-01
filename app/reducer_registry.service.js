// Based on the code splitting redux reducers example
// https://github.com/insin/react-examples/tree/master/code-splitting-redux-reducers
const ReducerRegistry = () => {
    let reducers = {}
    let changeListener = null

    return {
        getReducers: () => {
            return reducers
        },

        register: (reducer) => {
            reducers = Object.assign({}, reducers, reducer)

            if (changeListener) {
                changeListener(reducers)
            }
        },

        setChangeListener: (listener) => {
            changeListener = listener
        }
    }
}

export default function provide(ngModule) {
    ngModule.factory('reducerRegistry', ReducerRegistry);
}
