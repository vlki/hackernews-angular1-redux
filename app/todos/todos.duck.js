import todo from './todo.duck.js'

const ADD_TODO = 'todos/todos/ADD_TODO'
const INITIAL_STATE = []

function todos(state = INITIAL_STATE, action) {
    state = state.map((t) => todo(t, action))

    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: action.id,
                text: action.text,
                completed: false
            }]

        default:
            return state
    }
}

let newTodoId = 0

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text,
        id: newTodoId++
    }
}

export default function provide(ngModule) {
    ngModule.run(['reducerRegistry', (reducerRegistry) => {
        reducerRegistry.register({ todos })
    }])
}
