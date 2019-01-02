import React from "react";

import JokeData from "./jokeData";
import Joke     from "./Joke";

function App () {
  const JokeComponent = JokeData.map(joke => (
    <Joke
      key={ joke.id }
      question={ joke.question }
      punchLine={ joke.punchLine } />
  ));

  return <div>{ JokeComponent }</div>;
}

export default App;
