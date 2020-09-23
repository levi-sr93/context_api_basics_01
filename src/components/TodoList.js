import React from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
class TodoList extends React.Component {
  render() {
    return(
      <ThemeContext.Consumer>{(context) => {
        const {isDarkTheme, lightTheme, darkTheme, changeTheme } = context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        
        return (
          <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
          <p className="item">study react</p>
          <p className="item">drink coffee</p>
          <p className="item">study Node</p>
          <p className="item">Take a walk</p>

          <button className='ui button primary' onClick={changeTheme}>Change Theme</button>
        </div>
        )
      }}
      </ThemeContext.Consumer>
      )
  }
}

export default TodoList;