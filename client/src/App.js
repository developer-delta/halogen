import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  /* Fetch API is a tool that manipulates HTTP and, at this moment is to perform requests by using a Get request. To do that
  is to take in a promise which is a path of /api address that we want to fetch from and make our request. So basically to 
  fetch information from /api address. */
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  /* JSX is a syntax extension for JavaScript. It looks like a lot of HTML used for React. Currently, the codes show the curly
    braces, which is to treat the code located between JSX tags inside the curly braces as markers of the beginning and end
    of a JavaScript injection into JSX like a quotation for strings.  Because without the curly braces, any code between tags
    of a JSX element will be read as text like HTML and not as JavaScript. */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>{" "}
        {/* If no data message, then it will load otherwise, there is a data message */}
      </header>
    </div>
  );
}

export default App;
