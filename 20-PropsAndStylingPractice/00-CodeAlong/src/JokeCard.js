import React from 'react'

function JokeCard (props) {
  return (
    <div className='joke'>
      <h3 style={{display: !props.joke.question && "none"}} >Question: {props.joke.question}</h3>
      <h3 style={{color: !props.joke.question && "lightgray"}}>Punchline: {props.joke.punchLine}</h3>
      <hr />
    </div>
  )
}

export default JokeCard