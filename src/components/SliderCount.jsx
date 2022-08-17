import React, { useState, useSyncExternalStore } from "react";
import Slider from "react-input-slider";

export const SliderCount = ({setLimit, limit}) => {

  return (
    <div className="idcount">
      <Slider className="sliderid"
        onChange={({ x }) => setLimit(x)}
        x={limit}
        // size="small"
        // defaultValue={70}
        xmin={0}
        xmax={50}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <p>{limit}</p>
    </div>
  );
};
