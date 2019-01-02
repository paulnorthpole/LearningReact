import React from 'react';
import Joke from './Joke';
import JokeData from './jokeData';

function App () {
  const JokeComponent = JokeData.map(joke => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return (
    <div>
      {JokeComponent}
    </div>
  );
}

export default App;