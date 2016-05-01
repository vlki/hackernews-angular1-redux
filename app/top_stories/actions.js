import fetch from 'isomorphic-fetch'
import {
    getCurrentPageIds,
    areCurrentPageTopStoriesLoaded
} from './selectors'

export const TOP_STORIES_REQUEST = 'TOP_STORIES_REQUEST'
function topStoriesRequest() {
    return {
        type: TOP_STORIES_REQUEST
    }
}

export const TOP_STORIES_SUCCESS = 'TOP_STORIES_SUCCESS'
function topStoriesSuccess(responseData, entities) {
    return {
        type: TOP_STORIES_SUCCESS,
        topStories: responseData,
        entities
    }
}

export const TOP_STORIES_SET_PAGE = 'TOP_STORIES_SET_PAGE'
export function setPage(page) {
    return {
        type: TOP_STORIES_SET_PAGE,
        page: page
    }
}

function fetchTopStoriesIds() {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject(response)
            }
        })
}

function fetchTopStories() {
    return function (dispatch, getState) {
        dispatch(topStoriesRequest())

        return Promise.resolve()
            .then(function() {
                let state = getState()

                if (state.topStories.items.length === 0) {
                    return fetchTopStoriesIds()
                } else {
                    return Promise.resolve(state.topStories.items)
                }
            })
            .then(function(topStoriesIds) {
                // Here we have the IDs of top stories, but not necessarily the contents
                // so we call the fetchItemEntitiesIfNeeded with list of item IDs
                // and that thunk will make sure that those are loaded in the state
                let { page, perPage } = getState().topStories
                let itemIdsNeeded = getCurrentPageIds(page, perPage, topStoriesIds)

                return dispatch(fetchItemEntitiesIfNeeded(itemIdsNeeded)).then((entities) => {
                    return dispatch(topStoriesSuccess(topStoriesIds, entities))
                })
            })
            .catch(function(err) {
                dispatch(topStoriesFailure(response))
                return Promise.reject(err)
            })
    }
}

function shouldFetchTopStories({ topStories, entities }) {
    if (topStories.isFetching) {
        return false
    }

    if (topStories.items.length > 0 && areCurrentPageTopStoriesLoaded(topStories, entities.items)) {
        return false
    }

    return true
}

export function fetchTopStoriesIfNeeded() {
    return function (dispatch, getState) {
        if (shouldFetchTopStories(getState())) {
            return dispatch(fetchTopStories())
        } else {
            return Promise.resolve()
        }
    }
}

function fetchItemEntitiesIfNeeded(itemIds) {
    return function (dispatch, getState) {
        let state = getState()
        let nonFetchedIds = itemIds.filter((id) => {
            return !state.entities.items[id]
        })

        let promises = nonFetchedIds.map((id) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(response => {
                    if (response.ok) {
                        return response.json().then((data) => {
                            return { [id]: data }
                        })
                    } else {
                        return Promise.reject(response)
                    }
                })
        })

        return Promise.all(promises).then((results) => {
            return {
                items: Object.assign({}, ...results)
            }
        })
    }
}
