import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import PlayIcon from "./PlayIcon";
import PauseIcon from "./PauseIcon";
import Slider from "./Slider";

import "./App.css";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const playAudio = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pauseAudio = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const seekTime = (newCurrentTime) => {
    audioRef.current.currentTime = newCurrentTime;
    setCurrentTime(newCurrentTime);
  };

  useEffect(() => {
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
    });

    audioRef.current.addEventListener("timeupdate", updateTime);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  return (
    <Card>
      <h1 className="title">React Player</h1>
      <div className="description">Audio player with custom built controls</div>
      <audio ref={audioRef} src={"/track.mp3"} />

      <div className="controls">
        <button
          style={isPlaying ? { border: "1px solid black" } : {}}
          onClick={playAudio}
          className="icon"
        >
          <PlayIcon />
        </button>
        <Slider
          onClick={(position) => seekTime(position * duration)}
          progress={currentTime / duration}
        />
        <button onClick={pauseAudio} className="icon">
          <PauseIcon />
        </button>
      </div>
    </Card>
  );
};

export default App;
