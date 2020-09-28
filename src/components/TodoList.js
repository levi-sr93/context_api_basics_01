import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import { TodoListContext } from '../contexts/TodoListContext';

const TodoList = () => {
  const {todos} = useContext(TodoListContext);
  const {isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
      {todos.length ? (
        todos.map((todo) => {
          return <p key={todo.id} className="item">{todo.text}</p>
        })
      ) : (
        <div>You don't have any todos</div>
      )}
        <button className='ui button primary' onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default TodoList;