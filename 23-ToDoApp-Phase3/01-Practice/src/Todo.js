import React from 'react'

function Todo (props) {
  return (
    <div className='todo-item'>
      <input type='checkbox' />
      <h3>Item: {props.text}</h3>
      <hr />
    </div>
  )
}

export default Todo