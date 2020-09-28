import React, {useState, createContext} from 'react'


export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
  const [todos, setTodos] = useState([
    {text: 'Plan the family trip', id: 1},
    {text: 'Go shopping for dinner', id: 2},
    {text: 'Study React', id: 3}
  ]);

  return (
    <TodoListContext.Provider value={{ todos }}>
      {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider;