import React from "react";

function Palette() {
  const [paletteItems, setPaletteItems] = React.useState();

  React.useEffect(() => {
    fetch(`/profiles`)
      .then((res) => res.json())
      .then((data) => {
        setPaletteItems(data.palettes);
      });
  }, []);

  return (
    <div className="flex">
      {paletteItems &&
        paletteItems.map((palettes) => (
          <div className="relative m-3" key={palettes.ringName}>
            <div className=" flex justify-center items-center">
              <div className="palette-circle absolute top-0 mt-10"></div>
              <p className="absolute bottom-0 opacity-0 hover:opacity-100 bg-gray-500 w-full text-center p-2 rounded-b-2xl">
                {palettes.ringName}
              </p>
            </div>
            <div
              className="w-52 h-52 rounded-2xl"
              style={{ background: palettes.outerRingColor }}
            ></div>
          </div>
        ))}
    </div>
  );
}

export default Palette;
