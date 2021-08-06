//Import is to bring information from the particular address into this file. This file is then able to export information.
/* Importing React allows us to access its library and pull in the "react" module from our node_modules directory. If we don't
 have react added as a dependency in our package.json, there will be nothing to import. */
import React from "react";
import "./App.css"; //Importing the styles from the App.css file. The typical syntax is not used but the address of the CSS file.
// import LinearGradient from "./LinearGradient";
import { SketchPicker } from "react-color";
import Modals from "./Modals";
import Button from "./Button";
import LinearGradient from "./LinearGradient";


//A functional component is the JavaScript function. App is the name of the function.
function App() {
  //A syntax of useState hook is Destructuring Assignment what looks like properties of an array. It is concise and readable.
  /* useState is a react method that returns an array of two values - the current state value & the state setter, where we 
     update the value of this state.  Null is an initial state argument, and this indicates we  don't have the value needed 
     during the first render. */

  const [data, setData] = React.useState(null);
  /* This keeps track of our color; it allows us to change the background based on the color picker. To add background's color is
     to equal the color state, and the current initial is #47C4AF. To change color is to use setColor by using change event. */
  const [color, setColor] = React.useState("#47C4AF");
  /* Hidden is for a button to close the color picker, so there is a ternary operator or condition for it. Initially, it is 
     false, so setHidden is to toggle based on the false or true condition. */
  const [hidden, setHidden] = React.useState(false);

  //Fetch API allows for asyncronous http requests and returns a promise.
  /* useEffect hook is a named export from the React library. It is explained as that the effect happens after render (whenever
     a change happens). Currently, the useEffect is performing the data fetching. */
  React.useEffect(() => {
    fetch("/api")
      //.then() function returns a promise (promise is like a placeholder for a value).
      .then((res) => res.json()) //Return a promise that results in parsing the body as JSON.
      .then((data) => setData(data.message)); //We call setData to update data message
  }, []);

  /* JSX is a templating language for React. It looks like a lot of HTML used for React. Currently, the codes show the curly
    braces, which is to treat the code located between JSX tags inside the curly braces as markers of the beginning and end
    of a JavaScript injection into JSX like a quotation for strings.  Because without the curly braces, any code between tags
    of a JSX element will be read as text like HTML and not as JavaScript. */
  return (
    <div className="App">
      <header className="App-header">
        {/* <LinearGradient width="100px" />
        <LinearGradient height="300px" /> */}
        <nav className="fixed w-full z-10 flex items-center justify-between h-16 backdrop-filter backdrop-blur-lg bg-gray-600 bg-opacity-50">
          <button className="px-7">
            <img
              className="h-6 float-left"
              src="/images/hamburger-icon.png"
              alt="Hamburger's icon"
            />
            <strong className="ml-1 float-left text-base text-white">
              Menu
            </strong>
          </button>
          <Modals />
        </nav>
      </header>
      <main>
        <section className="hero my-44 flex flex-row px-10 w- auto h-auto pb-44">
          <div className="container w-1/2 flex flex-col text-start justify-start items-start">
            <img
            alt="halogen"
             className="w-3/4"
             src="/images/title.png"/>
            <p className="pt-7 mb-8 text-4xl leading-10">Instantly improve lighting in your video calls with halogen, a web-based lighting kit for all devices</p>
            <div className="flex flex-col justify-start">
              <LinearGradient width="400px" height="4px"></LinearGradient>
              {/* could not apply margins to the components so had to create an empty p tag */}
              <p className="mb-8"></p>
              <Button width="135px" height="45px" fontSize="17px" text="Get Started"></Button>
            </div>
          </div>
          <div className="three-images w-1/2 flex flex-row flex-col items-center relative">
              <img
                alt="Women uses halogen during her meetings"
                className="w-96" 
                src = "/images/heroSectionPerson.png"/>
              <img 
              alt="halogen can also be used on laptops and computers"
              className="absolute w-72 left-4 top-44"
              src = "/images/laptopRingLight.png"/>
              <img 
                alt="halogen can be used on mobiles"
                className="absolute w-28 right-16 top-44"
                src = "/images/mobileRingLight.png"/>
              
            </div>
        </section>

        <section className="app-info"></section>
        <section className="lightbox w-full h-screen justify-center items-center flex">
          <div
            style={{ background: color }}
            className="lightbox-sub rounded-lg relative w-full justify-center items-center flex"
          >
            <div className="lightbox-circle"></div>
            {hidden && (
              <SketchPicker
                className="sketchpicker float-right"
                color={color}
                onChange={(updatedColor) => setColor(updatedColor.hex)}
              />
            )}
            <button
              onClick={() => setHidden(!hidden)}
              className="bg-gray-200 text-black py-1 text-base px-3 rounded float-right absolute right-10 bottom-20"
            >
              {hidden ? "Close color picker" : "Open color picker"}
            </button>
          </div>
        </section>
        <section className="palette"></section>
      </main>
      <footer className="w-full bottom-0 items-center flex flex-full flex-col py-20">
        <address className="flex space-x-10">
          <div>
            <a href="https://twitter.com/?lang=en">
              <img
                className="bg-white rounded-full h-10"
                src="/images/twitter.png"
                alt="Twiiter's icon"
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/developer-delta/halogen">
              <img
                className="bg-white rounded-full h-10"
                src="/images/github.png"
                alt="GitHub's icon"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com">
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
              rel="noreferrer"
            >
              {" "}
              MIT license
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
//This exports App class to make it work and exposed. Without it, we won't be able to use or have access to it.
export default App;
