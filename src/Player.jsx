import React, { useRef, useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

import Card from "./Card";
import Slider from "./Slider";

import "./Player.css";

const Player = ({ audioUrl }) => {
  const player = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(0);

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

  function handleVolumeChange() {
    setCurrentVolume(player.current.volume);
  }

  function handleLoadedMetaData() {
    setDuration(player.current.duration);
    setCurrentVolume(player.current.volume);
    setIsPlaying(false);
  }

  function handleSeekTime(currentTime) {
    player.current.currentTime = currentTime;
  }

  useEffect(function () {
    if (!player.current) {
      return;
    }

    player.current.addEventListener("timeupdate", handleTimeUpdate);
    player.current.addEventListener("volumechange", handleVolumeChange);
    player.current.addEventListener("loadedmetadata", handleLoadedMetaData);
  }, []);

  return (
    <div>
      <h1 className="title">React Player</h1>
      <h3 className="subTitle">Audio player with custom controls</h3>
      {!audioUrl && <h4 className="choose">Please choose file to play</h4>}

      <div className="controls">
        <button className={isPlaying ? "playing" : ""} onClick={togglePlay}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <Slider current={currentTime} max={duration} onClick={handleSeekTime} />
      </div>
      <audio ref={player} src={audioUrl} />
    </div>
  );
};

export default Player;
