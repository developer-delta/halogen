import React from "react";

function Glass(props) {
  return (
    <div
      style={{
        borderRadius: props.borderRadius,
        border: props.border,
        padding: props.padding,
      }}
      {...props}
      className="glass rounded-full px-4 py-1 flex items-center justify-center"
    ></div>
  );
}

export default Glass;
