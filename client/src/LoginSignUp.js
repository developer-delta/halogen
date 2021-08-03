import React from "react";
import TextInput from "./TextInput";
import LinearGradient from "./LinearGradient";

function LoginSignUp() {
  return (
    <div className="bg-gray-600 px-10 pt-14 pb-8 text-center rounded-lg">
      <h2 className="text-5xl">halogen</h2>
      <h3 className="text-xs text-gray-300 py-2">
        Login to save and syn palettes
      </h3>
      <div className="py-3">
        <div className="btns flex justify-between px-8 py-1 rounded-full border-white border-2">
          <h3 className="text-lg">Log in</h3>
          <h3 className="text-lg">Sign Up</h3>
        </div>
        <div className="ml-6 mt-1 mb-3">
          <LinearGradient width="64px" />
        </div>
      </div>
      <form className="form">
        <div className="mb-4">
          <TextInput placeholder="Email address" />
        </div>
        <div className="mb-6 ">
          <TextInput placeholder="Password" />
        </div>
        <button
          className="bg-white text-black hover:bg-gray-700 hover:text-white font-bold py-2  px-8 rounded-full"
          type="button"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default LoginSignUp;
