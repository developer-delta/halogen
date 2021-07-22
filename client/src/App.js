import React from "react";
import "./App.css";
import Button from "./Button";

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
      {/* <header className="App-header"> */}

      {/* Should we be including all this text in header? Should we also be using body? */}
      <header className="App-header">
        <nav className="nav-bar">
          <Button text="Sign Up" />
        </nav>
        <section className="hero"></section>
        <section className="app-info"></section>
        <section className="your-pick"></section>
        <section className="palette"></section>
        <footer className="bottom"></footer>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

         main
        <p class="heading-font">{ !data ? "Loading..." : data}</p>{" "}

        {/* If no data message, then it will load otherwise, there is a data message */}
      </header>
    </div>
  );
}

export default App;
