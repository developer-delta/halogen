import React from "react";

function Glass(props) {
  return (
    <div
      {...props}
      className={`backdrop-filter backdrop-blur ${props.dark ? 'bg-dark-glass-grey bg-opacity-50' : 'bg-glass-grey bg-opacity-25'}`}
    ></div>
  );
}

export default Glass;
