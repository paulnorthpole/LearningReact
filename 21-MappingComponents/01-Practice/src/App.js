import React    from 'react';
import Joke     from './Joke';
import JokeData from './jokeData';

function App () {
  const jokeComponent = JokeData.map(joke => <Joke
    key={ joke.key }
    question={ joke.question }
    punchLine={ joke.punchLine } />);


  return (
    <div>
      { jokeComponent }
    </div>
  );
}

export default App;