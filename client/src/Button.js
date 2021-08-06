import React from "react";

function Button(props) {
  return (
    <button
    style={{ width: props.width, height: props.height, fontSize: props.fontSize }}  
    {...props}
      className="bg-gray-500 text-white px-4 py-1 rounded-full float-right mr-10 text-base"
    >
      {props.text}
    </button>
  );
}

export default Button;
