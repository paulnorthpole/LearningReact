import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <h1>
          You are currently logged <b>{isLoggedIn ? "IN" : "OUT"}</b>
        </h1>
      </div>
    );
  }
}

export default App;
