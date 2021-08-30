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
      className="rounded-full px-4 py-1 flex items-center justify-center backdrop-filter backdrop-blur bg-dark-glass-grey "
    ></div>
  );
}

export default Glass;
