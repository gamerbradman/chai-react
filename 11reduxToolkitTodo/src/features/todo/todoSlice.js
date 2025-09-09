import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState={
    todos : [{id:1,text:"hellowrodld"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action) => {
            state.todos=state.todos.filter((todo)=> todo.id !== action.payload)    //the action payload sent here will have only the id
        }
    }
})


export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer