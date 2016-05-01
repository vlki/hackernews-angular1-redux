// Contains the whole state tree for clarity and dev purposes
{
    entities: {
        story: {
            45: {
                id: 45,
                type: 'story',
                title: 'A big story headline',
                score: 32
                // ...
            }
        }
    },
    topStories: {
        isFetching: false,
        didInvalidate: false,
        page: 0,
        perPage: 10,
        items: [
            45
        ]
    }
}
