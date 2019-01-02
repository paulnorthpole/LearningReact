import React    from "react";
import ReactDOM from "react-dom";

function App () {
  const date   = new Date(2018, 6, 31, 18);
  const hours  = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30
  };

  if (hours < 12) {
    timeOfDay    = "morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay    = "afternoon";
    styles.color = "#2E6927";
  } else {
    timeOfDay    = "night";
    styles.color = "#D36060";
  }

  // const styles = {
  //   color:           "#FF8C08",
  //   backgroundColor: "#FF2D03",
  //   fontSize: 24
  // };

  // one set of curly braces for getting to JS and one set to make it
  // an object.  So text must be in string format. No -(dash's) use
  // camel case.
  return (
    <h1 style={ styles }>Good { timeOfDay }!</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
