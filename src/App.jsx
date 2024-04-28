import { useState } from "react";
import Player from "./Player";
import Playlist from "./Playlist";
import Card from "./Card";

import "./App.css";

function App() {
  const [audioUrl, setAudioUrl] = useState();

  return (
    <Card>
      <Player audioUrl={audioUrl} />
      <Playlist currentUrl={audioUrl} onSelect={setAudioUrl} />
    </Card>
  );
}

export default App;
