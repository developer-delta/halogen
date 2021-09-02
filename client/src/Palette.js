import React from "react";
import defaultPalettes from "./defaultPalettes.js";

function Palette() {
  return (
    <div className="flex">
      {defaultPalettes.palettes.map((data) => (
        <div className="relative m-3" key={data.ringName}>
          <div className=" flex justify-center data-center">
            <div className="palette-circle absolute top-0 mt-10"></div>
            <p className="absolute bottom-0 opacity-0 hover:opacity-100 bg-gray-500 w-full text-center p-2 rounded-b-2xl">
              {data.ringName}
            </p>
          </div>
          <div
            className="w-52 h-52 rounded-2xl"
            style={{
              backgroundImage: `radial-gradient(${data.innerGradientColor}, ${data.outerGradientColor}`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Palette;
