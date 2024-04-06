import React, { useRef } from "react";

import "./Slider.css";

const Slider = ({ progress, onClick }) => {
  const divRef = useRef();

  // progress is a 0 to 1, where 1 is 100%
  const width = progress * 100;

  return (
    <div
      ref={divRef}
      onClick={(e) => {
        const clickPosition = e.nativeEvent.offsetX;
        const percentage = clickPosition / 200;
        onClick(percentage);
      }}
      className="track"
    >
      <div style={{ width: `${width}%` }} className="progress" />
      <div style={{ left: `calc(${width}% - 10px)` }} className="knob" />
    </div>
  );
};

export default Slider;
