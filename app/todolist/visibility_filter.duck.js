const SET_VISIBILITY_FILTER = 'todolist/visibility_filter/SET_VISIBILITY_FILTER'
const INITIAL_STATE = 'SHOW_ALL'

export default function visibilityFilter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter

        default:
            return state
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    }
}
