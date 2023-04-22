import React from "react";
import Boomplayer from "./components/Boomplayer";

import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import "../sass/pages/Music.scss";
import "../sass/pages/Library.scss";
import "../sass/pages/Account.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <MusicPlayer />

        <Boomplayer />
      </div>
    </div>
  );
}

export default App;
