import React from "react";

function TodoItem() {
  return (
  <div className='todo-item'>
    <input type="checkbox" name="cheese" id="cheese" />
    <label For="cheese">Cheese</label>
    <p>Something about this goes</p>
  </div>
  );
}

export default TodoItem