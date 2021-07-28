import React from "react";
import "./App.css";
import Button from "./Button";
import LinearGradient from "./LinearGradient";
import TextInput from "./TextInput";

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
        <LinearGradient width="100px"/>
        <LinearGradient width="300px"/>
        <LinearGradient width="500px"/>

        <nav className="nav-bar">
          <Button text="Sign Up" />
        </nav>
        <section className="hero"></section>
        <section className="app-info"></section>
        <section className="your-pick"></section>
        <section className="palette"></section>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
         main
        <p className="heading-font">{ !data ? "Loading..." : data}</p>{" "}
        {/* If no data message, then it will load otherwise, there is a data message */}
        <TextInput placeholder="Email address" />
        <TextInput placeholder="Password" />
        <footer className="fixed bg-gray-800 w-full bottom-0 items-center flex flex-full flex-col py-20">
          <address className="flex space-x-10">
            <div>
              <a href="#">
                <img
                  className="bg-white rounded-full h-10"
                  src="/images/twitter.png"
                  alt="Twiiter's icon"
                />
              </a>
            </div>

            <div>
              <a href="#">
                <img
                  className="bg-white rounded-full h-10"
                  src="/images/github.png"
                  alt="GitHub's icon"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  className="bg-white rounded-full h-10"
                  src="/images/insta.png"
                  alt="instagram's icon"
                />
              </a>
            </div>
          </address>
          <div className="mt-5">
            <p>Made with 🤝 by CodeDay Labs</p>
            <p className="text-base italic">
              Released under the
              <a
                href="https://en.wikipedia.org/wiki/MIT_License"
                target="_blank"
              >
                {" "}
                MIT license
              </a>
            </p>
          </div>
        </footer>
      </header>
    </div>
  );
}

export default App;
