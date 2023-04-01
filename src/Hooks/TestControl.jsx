import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from "react-icons/bs";
import PlayPause from "../components/PlayPause";

function TestControl({
  isReady,
  isPlaying,
  currentSongs,
  shuffle,
  repeat,
  handlePrevSong,
  handlePlayPause,
  handleNextSong,
  handleRepeat,
  handleShuffle,
}) {
  return (
    <div className="controls">
      <button className={shuffle ? "shuffle active" : "shuffle"} onClick={handleShuffle}>
        <BsShuffle className="icon" size={40} fill={shuffle && !repeat ? "white" : "white"} />
      </button>

      <div className="change-song">
        <button
          className="prev-btn"
          disabled={currentSongs.length > 0 ? false : true}
          onClick={handlePrevSong}
        >
          <MdSkipPrevious className="icon" size={40} />
        </button>
        <button className="playpause-btn">
          <PlayPause
            isReady={isReady}
            condition={isPlaying}
            size={80}
            pauseicon={BsFillPauseFill}
            playicon={BsFillPlayFill}
            handlePlayPause={handlePlayPause}
          />
        </button>
        <button
          className="next-btn"
          disabled={currentSongs.length > 0 ? false : true}
          onClick={handleNextSong}
        >
          <MdSkipNext className="icon" size={40} />
        </button>
      </div>

      <button className={repeat ? "repeat-track active" : "repeat-track"} onClick={handleRepeat}>
        <BsArrowRepeat className="icon" size={40} fill={repeat && !shuffle ? "white" : "white"} />
      </button>
    </div>
  );
}

export default TestControl;
