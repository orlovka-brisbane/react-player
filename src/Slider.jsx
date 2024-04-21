import React from "react";
import "./Slider.css";

function Slider({ current, max }) {
  const currentProgressInPercentage = (current / max) * 100;

  function handleClick(event) {
    console.log(event);
  }

  return (
    <div onClick={handleClick} className="track">
      <div
        className="progress"
        style={{ width: `${currentProgressInPercentage}%` }}
      />
      <div
        className="knob"
        style={{ left: `calc(${currentProgressInPercentage}% - 9px)` }}
      />
    </div>
  );
}

export default Slider;
