import React from "react";
import "./Slider.css";

function Slider({ current, max, onClick }) {
  const currentProgressInPercentage = (current / max) * 100;

  function handleClick(event) {
    const offsetX = event.nativeEvent.offsetX;
    const width = event.target.clientWidth;

    const currentTime = (max * offsetX) / width;

    onClick(Math.max(0, currentTime));
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
