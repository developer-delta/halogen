import React from "react";

function Button(props) {
  return (
    <div>
      <button className="bg-gray-500 text-white px-4 py-1 rounded-full float-right mr-10 text-base">
        {props.text}
      </button>
    </div>
  );
}

export default Button;
