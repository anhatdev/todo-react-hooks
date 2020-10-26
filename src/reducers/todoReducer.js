export const initialState = {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [
        {
            "id": 1,
            "text": "Learn about Polymer",
            "is_complete": false
          },
          {
            "id": 2,
            "text": "Watch Pluralsight course on Docker",
            "is_complete": true
          }
    ]
}
export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            {
                const newTodo = { text: action.payload, is_complete: false };
                const newState = {
                    todos: [...state.todos, newTodo]
                }
                localStorage.setItem('todos',JSON.stringify(newState.todos));
                return newState;
            }
        case "COMPLETE_TODO":
            {
                const newState = {
                    todos: [...state.todos]
                }
                newState.todos[action.payload].is_complete = true;
                localStorage.setItem('todos',JSON.stringify(newState.todos));
                return newState;
            }
        case "UPDATE_TODO":
            {
                const newState = {
                    todos: [...state.todos]
                }
                newState.todos[action.payload.index].text = action.payload.value;
                localStorage.setItem('todos',JSON.stringify(newState.todos));
                return newState;
            }
        case "REMOVE_TODO":
            {
                const newState = {
                    todos: [...state.todos]
                }
                newState.todos.splice(action.payload, 1);
                localStorage.setItem('todos',JSON.stringify(newState.todos));
                return newState;
            }
        default:
            return state;
    }
}