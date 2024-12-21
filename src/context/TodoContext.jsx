import React, { createContext, useReducer } from "react";


export const TodoContext = createContext();


const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]; 

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload); 
    default:
      return state; 
  }
};


export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []); 
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
