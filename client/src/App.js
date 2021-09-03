//Import is to bring information from the particular address into this file. This file is then able to export information.
/* Importing React allows us to access its library and pull in the "react" module from our node_modules directory. If we don't
 have react added as a dependency in our package.json, there will be nothing to import. */
import React from "react";
import "./App.css"; //Importing the styles from the App.css file. The typical syntax is not used but the address of the CSS file.
import { SketchPicker } from "react-color";
import Modals from "./Modals";
import Button from "./Button";
import LinearGradient from "./LinearGradient";
import Palette from "./Palette";
import SaveModal from "./SaveModal";
import NavBar from "./NavBar";
//http://iamdustan.com/smoothscroll/ by Dustan Kasten & Jeremias Menichelli helps to enable smooth scroll for some major browsers
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill(); //kick off the polyfill

//A functional component is the JavaScript function. App is the name of the function.
function App() {
  //A syntax of useState hook is Destructuring Assignment what looks like properties of an array. It is concise and readable.
  /* useState is a react method that returns an array of two values - the current state value & the state setter, where we 
       update the value of this state.  Null is an initial state argument, and this indicates we  don't have the value needed 
       during the first render. */

  /* This keeps track of our color; it allows us to change the background based on the color picker. To add background's color is
       to equal the color state, and the current initial is #47C4AF. To change color is to use setColor by using change event. */
  const [color, setColor] = React.useState("#47C4AF");
  const [innerColor, setInnerColor] = React.useState("#1844AF");
  /* Hidden is for a button to close the color picker, so there is a ternary operator or condition for it. Initially, it is 
       false, so setHidden is to toggle based on the false or true condition. */
  const [hidden, setHidden] = React.useState(false);
  const [innerHidden, setInnerHidden] = React.useState(false);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const toLightBox = () => {
    document.querySelector(".lightbox").scrollIntoView({ behavior: "smooth" });
  };

  /* JSX is a templating language for React. It looks like a lot of HTML used for React. Currently, the codes show the curly
      braces, which is to treat the code located between JSX tags inside the curly braces as markers of the beginning and end
      of a JavaScript injection into JSX like a quotation for strings.  Because without the curly braces, any code between tags
      of a JSX element will be read as text like HTML and not as JavaScript. */
  return (
    <div className="App">
      <header className="App-header">
        <nav className="fixed w-full z-10 flex items-center justify-between h-16 backdrop-filter backdrop-blur-lg bg-gray-600 bg-opacity-50">
          <NavBar />
          <Modals />
        </nav>
      </header>
      <main>
        <section className="hero my-44 flex flex-row px-10 w-auto h-auto pb-44">
          <div className="container w-1/2 flex flex-col text-start justify-start items-start">
            <img alt="halogen" className="w-3/4" src="/images/title.png" />
            <p className="pt-7 mb-8 text-4xl leading-10">
              Instantly improve lighting in your video calls with halogen, a
              web-based lighting kit for all devices
            </p>
            <div className="flex flex-col justify-start">
              <LinearGradient width="400px"></LinearGradient>
              <div className="mb-8"></div>
              <Button
                width="135px"
                height="45px"
                fontSize="17px"
                text="Get Started"
                borderRadius="20px"
                border="2px solid white"
                onClick={toLightBox}
              ></Button>
            </div>
          </div>
          <div className="three-images w-1/2 flex flex-col items-center relative">
            <img
              alt="Women uses halogen during her meetings"
              className="w-96"
              src="/images/heroSectionPerson.png"
            />
            <img
              alt="halogen can also be used on laptops and computers"
              className="absolute w-72 left-4 top-44"
              src="/images/laptopRingLight.png"
            />
            <img
              alt="halogen can be used on mobiles"
              className="absolute w-28 right-16 top-44"
              src="/images/mobileRingLight.png"
            />
          </div>
        </section>
        <section className="app-info h-screen p-8 relative">
          <div className="halogen-line absolute bottom-0 left-0"></div>
          <div className="flex h-1/2 w-full">
            <div className="w-1/2 flex justify-center">
              <img
                className="h-full p-8"
                src="https://user-images.githubusercontent.com/13723156/127782437-7f221d77-d4d9-4371-ad6d-ede848f03248.png"
                alt="Monitor with Light Box"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="absolute -top-10 h-10"
                src="https://user-images.githubusercontent.com/13723156/127782418-a009e7a2-294d-4abe-b46e-2ac0baac5e40.png"
                alt="Circle logo"
              />
              <LinearGradient height="200%" />
            </div>
            <div className="flex flex-col justify-center text-left w-1/2 p-8">
              <h2 className="text-5xl leading-relaxed">
                Halogen works on any screen to create the perfect lighting setup
              </h2>
              <p className="leading-snug">
                Use the screens you have to create better lighting in your video
                calls. Halogen on your phone, ipad, or second monitor can make
                all the difference when your video is on.
              </p>
            </div>
          </div>
          <div className="flex h-1/2 w-full">
            <div className="flex flex-col justify-center text-right w-1/2 p-8">
              <h2 className="text-5xl leading-relaxed">
                Easily sync your lightbox palettes together.
              </h2>
              <p className="leading-snug">
                Auto sync your devices to reflect changes on all your
                lightboxes. Or if you prefer you can configure each one
                individually.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img
                className="h-full p-8"
                src="https://user-images.githubusercontent.com/13723156/127782433-d937e0b7-4efe-4c09-b552-803bf6188b3e.png"
                alt="Phone with Light Box"
              />
            </div>
          </div>
        </section>
        {/*try-it-out section */}
        <section className="flex justify-evenly items-center mb-20 mt-28">
          <LinearGradient width="13%" />
          <p className="try-text">Here, why don't you just try it out?</p>
          <LinearGradient width="13%" />
        </section>
        <section className="lightbox h-screen justify-center items-center flex">
          <div
            style={{
              backgroundImage: `radial-gradient(${innerColor}, ${color}`,
            }}
            className={`lightbox-sub w-full rounded-lg relative justify-center items-center flex pt-5 pb-5 ${
              isFullScreen ? "full-screen" : ""
            }`}
          >
            <div className="lightbox-circle"></div>
            <div className="glass absolute bottom-14 right-5 rounded-full px-5 py-1">
              <SaveModal />
            </div>
            {/*Button to toggle between fullscreen and minimize icons*/}
            <div className="glass flex p-2 rounded-full absolute bottom-3.5 right-8">
                <button onClick={() => setIsFullScreen(!isFullScreen)}>
                  {isFullScreen ? (
                    <img
                      className="h-5"
                      src="/images/minimize.png"
                      alt="Minimize"
                    />
                  ) : (
                    <img
                      className="h-5"
                      src="/images/fullscreen.png"
                      alt="Fullscreen"
                    />
                  )}
                </button>
            </div>
            {hidden && (
              <SketchPicker
                className="sketchpicker float-right "
                color={color}
                onChange={(updatedColor) => setColor(updatedColor.hex)}
              />
            )}
            <button
              onClick={() => setHidden(!hidden)}
              className="bg-gray-200 text-black py-1 text-base px-3 rounded float-right absolute right-7 bottom-36"
            >
              {hidden
                ? "Close color picker"
                : "Open color picker for rectangle"}
            </button>
            {innerHidden && (
              <SketchPicker
                className="sketchpicker float-right"
                color={innerColor}
                onChange={(updatedInnerColor) =>
                  setInnerColor(updatedInnerColor.hex)
                }
              />
            )}
            <button
              onClick={() => setInnerHidden(!innerHidden)}
              className="bg-gray-200 text-black py-1 text-base px-3 rounded float-right right-7 sketch-inner "
            >
              {innerHidden
                ? "Close color picker"
                : "Open color picker for inner circle"}
            </button>
          </div>
        </section>
        <section className="palette overflow-x-auto">
          <Palette />
        </section>
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
