import React, { useRef, useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";

const App = () => {
  const player = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function handlePlay() {
    player.current.play();
  }

  function handlePause() {
    player.current.pause();
  }

  function handleTimeUpdate() {
    setCurrentTime(player.current.currentTime);
  }

  function handleLoadedMetaData() {
    setDuration(player.current.duration);
  }

  useEffect(function () {
    if (!player.current) {
      return;
    }

    player.current.addEventListener("timeupdate", handleTimeUpdate);
    player.current.addEventListener("loadedmetadata", handleLoadedMetaData);
  }, []);

  return (
    <Card>
      <h1 className="title">React Player</h1>
      <h3 className="subTitle">Audio player with custom controls</h3>

      <div className="controls">
        <button onClick={handlePlay}>Play</button>

        {/* TODO: Slider */}
        <div>Current time: {currentTime}</div>
        <div>Duration: {duration}</div>

        <button onClick={handlePause}>Pause</button>
      </div>
      <audio ref={player} src="/track.mp3" />
    </Card>
  );
};

export default App;
