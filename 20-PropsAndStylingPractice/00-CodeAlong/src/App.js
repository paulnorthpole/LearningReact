import React    from "react";
import JokeCard from "./JokeCard";

function App () {

  return (
    <div className='joke-cards'>

      <JokeCard
        joke={ {
          punchLine: "It's hard to explain puns to kleptomaniacs because they always take things literally."
        } }
      />

      <JokeCard
        joke={ {
          question:  "Why did the chicken cross the road",
          punchLine: "To get to the other side"
        } }
      />

      <JokeCard
        joke={ {
          question:  "What's the best thing about Switzerland?",
          punchLine: "I don't know, but the flag is a big plus!"
        } }
      />

      <JokeCard
        joke={ {
          question:  "Did you hear about the mathematician who's afraid of the negative numbers?",
          punchLine: "He'll stop at nothing to avoid them"
        } }
      />

      <JokeCard
        joke={ {
          question:  "Hear about the new restaurant called Karma?",
          punchLine: "There's no menu: You get what you deserve."
        } }
      />

      <JokeCard
        joke={ {
          question:  "Did you hear about the claustrophobic astronaut?",
          punchLine: "He just needed a little space."
        } }
      />
    </div>
  );
}

export default App;
