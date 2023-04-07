import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from "react-icons/bs";
import PlayPause from "../PlayPause";

function Controls({
  isPlaying,
  currentSongs,
  shuffle,
  setShuffle,
  handlePrevSong,
  handlePlayPause,
  handleNextSong,
  repeat,
  setRepeat,
}) {
  const handleShuffle = e => {
    setShuffle(prevValue => !prevValue);
    if (repeat) setRepeat(!repeat);
  };

  const handleRepeat = e => {
    if (shuffle) setShuffle(!shuffle);
    setRepeat(prevValue => !prevValue);
  };

  return (
    <div className="controls">
      <button className={shuffle ? "shuffle active" : "shuffle"} onClick={handleShuffle}>
        <BsShuffle className="icon" size={35} fill={shuffle && !repeat ? "white" : "white"} />
      </button>

      <div className="change-song">
        <button
          className="prev-btn"
          disabled={currentSongs.length > 0 ? false : true}
          onClick={handlePrevSong}
        >
          <MdSkipPrevious className="icon" size={35} />
        </button>
        <button className="playpause">
          <PlayPause
            condition={isPlaying}
            size={50}
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
          <MdSkipNext className="icon" size={35} />
        </button>
      </div>

      <button className={repeat ? "repeat-track active" : "repeat-track"} onClick={handleRepeat}>
        <BsArrowRepeat className="icon" size={35} fill={repeat && !shuffle ? "white" : "white"} />
      </button>
    </div>
  );
}

export default Controls;
