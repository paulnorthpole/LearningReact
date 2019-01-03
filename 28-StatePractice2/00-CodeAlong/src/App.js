import React, { Component } from "react";

// function App () {
//     return (
//       <div>
//         <h1>You are currently logged (IN/OUT)</h1>
//       </div>
//     );
//   }

// return (
//   <div>
//     <h1>You are currently logged (IN/OUT)</h1>
//   </div>
// );

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    let displayWord
    if (this.state.isLoggedIn) {
      displayWord= 'in'
    } else {
      displayWord = 'out'
    }

    return (
      <div>
        <h1>You are currently logged {displayWord}</h1>
      </div>
    );
  }
}

export default App;
