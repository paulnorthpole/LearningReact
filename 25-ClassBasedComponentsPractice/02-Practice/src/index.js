import React, { Component } from "react";
import ReactDOM             from "react-dom";

class App extends Component {
  render () {
    return (

      <div>
        <Header username="Senior Pablo"/>
        <Greeting />
      </div>
    );
  }
}

// #2
class Header extends Component {
  render () {
    return (
      <header>
        <p>Welcome, { this.props.username }!</p>
      </header>
    );
  }
}

// #3
class Greeting extends Component {
  render () {
    const date  = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return (
      <h1>Good { timeOfDay } to you, sir or madam!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
