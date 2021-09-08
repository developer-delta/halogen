import React from "react";
import axios from "axios"; //Used to make the HTTP requests that we need
import TextInput from "./TextInput";
import Button from "./Button";

function Passport() {
  const [registerUsername, setRegisterUsername] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const [loginUsername, setLoginUsername] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  //To run register, login, and get user methods -- Sent to the backend
  //In data property for register/login, from state values, when user types input and submit, they  will ship that data there
  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true, // allows for cross-origin resource sharing on different URLs
      url: "/login",
    }).then((res) => console.log(res));
  };

  /* e as a parameter is event which in this case is onChange, target is an element that triggered event which in this 
    case is the input then the value is the value of the input element. This allows us to have access to our input through
     e.target.value. */
  return (
    <div className="bg-gray-600 px-10 pt-14 rounded-lg">
      <div className="text-center">
        <h2 className="text-5xl">halogen</h2>
        <h3 className="text-xs text-gray-300 py-2">
          Login to save and sync palettes
        </h3>
      </div>
      <div className="form py-3 flex justify-center items-center">
        <fieldset className="p-6 border-indigo-200 border-2">
          <legend className="p-2 bg-indigo-200 rounded-full text-gray-600 text-3xl italic">
            Register
          </legend>
          <TextInput
            placeholder="Email Address"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <TextInput
            placeholder="Password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <div className="pt-5 text-center">
            <Button
              width="85px"
              height="30px"
              borderradius="10px"
              border="1px solid"
              text="Submit"
              onClick={register}
            />
          </div>
        </fieldset>

        <fieldset className="p-6 border-indigo-200 border-2 ml-10">
          <legend className="p-2 bg-indigo-200 rounded-full text-gray-600 text-3xl italic">
            Login
          </legend>
          <TextInput
            placeholder="Email Address"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <TextInput
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <div className="pt-5 text-center">
            <Button
              width="85px"
              height="30px"
              borderradius="10px"
              border="1px solid"
              text="Submit"
              onClick={login}
            />
          </div>
        </fieldset>
      </div>
      <div className="flex justify-center items-center text-center flex-col pb-10 text-black "></div>
    </div>
  );
}

export default Passport;
