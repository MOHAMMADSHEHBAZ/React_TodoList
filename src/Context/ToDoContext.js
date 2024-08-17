import { createContext,useContext } from "react";

export const ToDoContext  = createContext({
    todos:[
        {id:1,todo:"msg",completed:false},
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const ToDo = () =>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider