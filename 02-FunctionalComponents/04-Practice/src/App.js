import React, { Component } from "react";

function MyInfo() {
  return (
    <div>
      <h1>Paul C</h1>
      <p>this is the last time if it works on the first try</p>
      <ol>
        <li>Pizza</li>
        <li>Thailand</li>
        <li>Tacos</li>
      </ol>
    </div>
  );
}

class App extends Component {
  render() {
    return MyInfo();
  }
}

export default App;
