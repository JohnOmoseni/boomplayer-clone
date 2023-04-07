import { FaPlay, FaPause } from "react-icons/fa";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

import { playPause } from "../redux/features/playerSlice";

function PlayPause({ condition, color, size, isReady, playicon, pauseicon, handlePlayPause }) {
  const override = {
    borderWidth: "3px",
    borderStyle: isReady ? "solid" : "red",
    animationDuration: "1.2s",
    filter: "blur(1px)",
  };

  const dispatch = useDispatch();

  const handlePauseClick = e => {
    e.stopPropagation();
    dispatch(playPause(false));
  };
  const handlePlayClick = e => {
    e.stopPropagation();
    dispatch(playPause(true));
  };

  const PlayIcon = playicon ?? FaPlay;
  const PauseIcon = pauseicon ?? FaPause;

  return (
    <div className="playpause" onClick={e => e.stopPropagation()}>
      {!isReady && (
        <ClipLoader color="blue" cssOverride={override} className="loader" size={size + 20} />
      )}

      {condition ? (
        // if condition is true
        <PauseIcon
          className="icon"
          size={size ?? 20}
          fill={color ?? "#bcbcbc"}
          onClick={e => (handlePlayPause ? handlePlayPause() : handlePauseClick(e))}
        />
      ) : (
        <PlayIcon
          className="icon play"
          size={size ?? 20}
          fill={color ?? "#bcbcbc"}
          onClick={e => (handlePlayPause ? handlePlayPause() : handlePlayClick(e))}
        />
      )}
    </div>
  );
}

export default PlayPause;
