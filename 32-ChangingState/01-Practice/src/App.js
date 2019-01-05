import React, {Component} from 'react';

class App extends Component {
  constructor () {
    super();
    this.state      = {
      count: 0
    };
    this.plusOne    = this.plusOne.bind(this);
    this.timesTwo   = this.timesTwo.bind(this);
    this.minusThree = this.minusThree.bind(this);
  }

  plusOne () {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  timesTwo () {
    this.setState(prevState => {
      return {
        count: prevState.count * 2
      };
    });
  }

  minusThree () {
    this.setState(prevState => {
      return {
        count: prevState.count - 3
      };
    });
  }

  render () {
    return (
      <div>
        <h1>{ this.state.count }</h1>
        <button onClick={ this.plusOne }>Add 1</button>
        <button onClick={ this.timesTwo }>Times 2</button>
        <button onClick={ this.minusThree }>Minus 3</button>
      </div>
    );
  }
}

export default App;
