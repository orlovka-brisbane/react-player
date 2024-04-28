import { useEffect } from "react";
import Card from "./Card";

import "./Playlist.css";

const tracklist = [
  {
    name: "Noize MC - Пусть они умрут",
    url: "./track.mp3",
  },
  {
    name: "Каста - Годы Неправды",
    url: "./track2.mp3",
  },
  {
    name: "Баста - На Заре",
    url: "./track3.mp3",
  },
];

function Playlist({ onSelect, currentUrl }) {
  useEffect(() => {
    onSelect(tracklist[0].url);
  }, []);

  return (
    <div>
      <ul>
        {tracklist.map((track) => (
          <li
            onClick={() => onSelect(track.url)}
            className={track.url === currentUrl ? "selected" : ""}
          >
            {track.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
