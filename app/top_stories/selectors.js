export function getCurrentPageTopStories(topStories, itemEntities) {
    if (topStories.isFetching) {
        return []
    }

    return getCurrentPageTopStoriesIds(topStories).map((itemId) => {
        return itemEntities[itemId]
    })
}

export function getCurrentPageTopStoriesIds(topStories) {
    return getCurrentPageIds(topStories.page, topStories.perPage, topStories.items)
}

export function getCurrentPageIds(page, perPage, ids) {
    return ids.slice(page * perPage, (page + 1) * perPage)
}

export function itemEntitiesAreLoaded(itemEntities, ids) {
    return ids.every(id => itemEntities[id])
}

export function areCurrentPageTopStoriesLoaded(topStories, itemEntities) {
    return itemEntitiesAreLoaded(itemEntities, getCurrentPageTopStoriesIds(topStories))
}

export function getMaxPage(topStories) {
    let { perPage, items } = topStories
    let len = items.length

    // Dividing without the remainder
    return (len - (len % perPage)) / perPage
}
