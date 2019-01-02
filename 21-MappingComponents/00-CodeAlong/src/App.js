import React    from "react";
import Joke     from "./Joke";
import JokeData from "./jokeData";

function App() {
  const jokeComponents = JokeData.map(joke => <Joke
    key={ joke.id }
    question={ joke.question }
    punchLine={ joke.punchLine } />);

  return (
    <div className="joke-cards">
      {jokeComponents}
    </div>
  );
}

export default App;
