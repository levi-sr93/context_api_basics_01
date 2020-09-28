import React, { useState, createContext } from 'react'


export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: 'Plan the family trip', id: 1 },
    { text: 'Go shopping for dinner', id: 2 },
    { text: 'Study React', id: 3 }
  ]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { text: todo, id: Math.random() } 
    ]);
  }

  return (
    <TodoListContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider;