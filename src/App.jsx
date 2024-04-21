import React, { useRef, useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

import Card from "./Card";
import Slider from "./Slider";

import "./App.css";

const App = () => {
  const player = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    setIsPlaying(true);
    player.current.play();
  }

  function handlePause() {
    setIsPlaying(false);
    player.current.pause();
  }

  function togglePlay() {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
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
        <button className={isPlaying ? "playing" : ""} onClick={togglePlay}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <Slider current={currentTime} max={duration} />
        {/* <button onClick={handlePause}>
          <PauseIcon />
        </button> */}
      </div>
      <audio ref={player} src="/track.mp3" />
    </Card>
  );
};

export default App;
