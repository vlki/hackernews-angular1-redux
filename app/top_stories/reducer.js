import * as actionTypes from './actions'
import merge from 'lodash/merge'

const TOPSTORIES_INITIAL_STATE = {
    isFetching: false,
    page: 0,
    perPage: 20,
    items: []
}

export function topStories(state = TOPSTORIES_INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.TOP_STORIES_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })

        case actionTypes.TOP_STORIES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.topStories
            })

        case actionTypes.TOP_STORIES_SET_PAGE:
            return Object.assign({}, state, {
                page: action.page
            })

        default:
            return state
    }
}

const ENTITIES_INITIAL_STATE = {
    items: {}
}

export function entities(state = ENTITIES_INITIAL_STATE, action) {
    // If any action has entities field, merge its contents into entities
    if (action.entities) {
        return merge({}, state, action.entities)
    }

    return state
}
