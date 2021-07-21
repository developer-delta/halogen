import React from "react";

function Button(props) {
  return (
    <div>
      <button class="bg-gray-800 hover:bg-gray-500 py-1 text-white px-10 rounded-full">
        {props.text}
      </button>
    </div>
  );
}

export default Button;
