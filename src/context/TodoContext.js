import {createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
    checkToggle: () => {}
});

export const TodoContextProvider = TodoContext.Provider

export const useTodoContext = ()=> {
    return useContext(TodoContext);
}