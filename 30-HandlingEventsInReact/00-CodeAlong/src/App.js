import React from 'react'

function handleClick () {
  console.log("I was clicked too");

}

function App () {
  return (
    <div>
      <img
        onMouseOver={() => console.log('Mouse is over the image')
        }
        src='https://www.fillmurray.com/200/100'
        alt='' />
      <br/>
      <br/>
      <button onClick={()=> console.log("I was clicked")}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App