import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  //Fetch API allows for asyncronous http requests and returns a promise.
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  /* JSX is a templating language for React. It looks like a lot of HTML used for React. Currently, the codes show the curly
    braces, which is to treat the code located between JSX tags inside the curly braces as markers of the beginning and end
    of a JavaScript injection into JSX like a quotation for strings.  Because without the curly braces, any code between tags
    of a JSX element will be read as text like HTML and not as JavaScript. */
  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>{" "}
        {/* If no data message, then it will load otherwise, there is a data message */}
      </header>
    </div>
  );
}

export default App;
