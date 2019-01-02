import React, { Component } from 'react';

function MyInfo () {
  return (
    <div>
      <h1>Paul</h1>
      <p>testing this out from memory</p>
      <ul>
        <li>jfdsjajskeifjf</li>
        <li>jdkljskdiewjewjkgf fjsfjdskiejk fjfjdkiie</li>
        <li>jfdjksdjk fdjskfjsdkiej   oioiweir jfjk jgjksjdgkieik</li>
      </ul>
    </div>
  )
}

class App extends Component {
  render () {
    return (
      MyInfo()
    )
  }
}

export default App;