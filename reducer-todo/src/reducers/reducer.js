export const initialState = {
    todos: [
        { title: 'Learn about reducers', completed: false, id: 3892987589 },
        { title: 'Learn more about reducers', completed: true, id: 3892987592 }
    ]
}

export function reducer(state, action) {
    console.log('action', action);
    console.log('state', state);
    switch (action.type) {
        case "ADD_ITEM":
            const newID = Date.now()
            return {
                ...state,
                todos: [...state.todos, { title: action.payload, completed: false, id: newID }]
            }
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                          ...todo,
                          completed: !todo.completed
                        }
                      } else {
                        return todo
                      }
                })
            }
        case "CLEAR_COMPLETE":
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return state
    }
}

export default initialState