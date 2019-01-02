import React, { Component } from 'react';

function MyInfo () {
  return (
    <div>
      <h1>Paul</h1>
      <p>Just trying to learn a bit</p>
      <ol>
        <li>Thiland</li>
        <li>Europe</li>
        <li>Austriala</li>
      </ol>
    </div>
  )
}

class App extends Component {
  render () {
    return (
        MyInfo()
    );
  }
}

export default App;