import React, { Component } from 'react';

function MyInfo () {
  return (
    <div>
      <h1>Paul</h1>
      <p>This is a test</p>
      <ol>
        <li>jkdj</li>
        <li>jkfdskl</li>
        <li>jsdkjksklfsjk</li>
      </ol>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      MyInfo()
    );
  }
}

export default App;