import React    from 'react';
import Todo     from './Todo';
import todoData from './todosData';

function App () {
  const TodoComponent = todoData.map(item =>
    <Todo
      key={ item.id }
      text={ item.text }
      completed={ item.completed }
    />);

  return (
    <div>
      { TodoComponent }
    </div>
  );
}

export default App;