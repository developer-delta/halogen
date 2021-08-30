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
        borderRadius: props.borderRadius,
        border: props.border,
      }}
      {...props}
    >
      {props.text}
    </button>
  );
}

export default Button;
