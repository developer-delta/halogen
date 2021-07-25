import React from "react";

function TextInput() {
  return (
    <div>
      <div className="mt-5 mb-2">
        <input
          className="bg-gray-600 placeholder-gray-400 px-5 py-3 rounded text-lg border border-gray-400"
          type="text"
          placeholder="Email address"
        />
      </div>
      <div>
        <input
          className="bg-gray-600 placeholder-gray-400 px-5 py-3 rounded text-lg border border-gray-400"
          type="text"
          placeholder="Password"
        />
      </div>
    </div>
  );
}

export default TextInput;
