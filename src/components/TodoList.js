import React from 'react'

class TodoList extends React.Component {
  render() {
    return(
      <div className="ui list">
        <p className="item">study react</p>
        <p className="item">drink coffee</p>
        <p className="item">study Node</p>
        <p className="item">Take a walk</p>
      </div>
    )
  }
}

export default TodoList;