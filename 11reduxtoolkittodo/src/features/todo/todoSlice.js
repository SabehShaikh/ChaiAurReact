import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

function sayHello() {
    console.log("hello world");
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // state--> gives current state e.g todos,
        // action--> gives data.. e.g id/text
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer

/*
   Notes:
   - This code sets up a Redux slice named 'todo' for managing a list of todos.
   - The 'addTodo' reducer adds a new todo to the state, and 'removeTodo' removes a todo based on its ID.
   - The 'nanoid' function is used to generate unique IDs for todos.
   - The 'sayHello' function is not related to Redux and is included here as an example unrelated to the code's main functionality.
   - The 'createSlice' function simplifies the process of defining Redux slices by automatically generating action creators and action types.
   - Reducers modify the state in response to actions, following a predictable and immutable pattern.
   - This code provides a foundation for integrating Redux state management into a React application focused on todo management.
*/