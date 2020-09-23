import React from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
class TodoList extends React.Component {
  static contextType = ThemeContext;
  render() {
    //getting data from theme context
    const {isDarkTheme, lightTheme, darkTheme} = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return(
      <div style={{background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
        <p className="item">study react</p>
        <p className="item">drink coffee</p>
        <p className="item">study Node</p>
        <p className="item">Take a walk</p>
      </div>
    )
  }
}

export default TodoList;