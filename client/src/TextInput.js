import React, { Component } from "react";

var inputStyle =
  "bg-gray-600 placeholder-gray-400 px-5 py-3 rounded text-lg border border-gray-400";

class TextInput extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 mb-2">
          <input
            className={inputStyle}
            type="text"
            placeholder="Email address"
          />
        </div>
        <div>
          <input className={inputStyle} type="text" placeholder="Password" />
        </div>
      </div>
    );
  }
}

export default TextInput;
