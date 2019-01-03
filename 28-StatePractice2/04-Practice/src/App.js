import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    const loggedIn = this.state.isLoggedIn;
    return (
      <div>
        <h1>You are currently logged {loggedIn ? "in" : "out"}</h1>
      </div>
    );
  }
}

export default App;
