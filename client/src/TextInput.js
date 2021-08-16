import React from "react";

function TextInput({ placeholder, onChange }) {
  return (
    <div>
      <input
        className="bg-gray-600 placeholder-gray-400 px-5 py-3 rounded text-lg border border-gray-400 mt-2 input-button text-black"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
