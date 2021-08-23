import React from "react";

function Button(props) {
  return (
    <button
      style={{
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
        color: props.color,
        background: props.background,
      }}
      {...props}
      className="bg-gray-500 text-white px-4 py-1 rounded-full text-base hover:bg-gray-400"
    >
      {props.text}
    </button>
  );
}

export default Button;
