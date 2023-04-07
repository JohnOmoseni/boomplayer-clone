import { useDispatch, useSelector } from "react-redux";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";

function SongRow({ song, idx, data }) {
  const { activeSong, isPlaying } = useSelector(state => state.player);
  const dispatch = useDispatch();

  const handlePauseClick = e => {
    e.stopPropagation();
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    if (activeSong) dispatch(playPause(true));
    return;
  };

  const handleSetSong = e => {
    e.stopPropagation();

    dispatch(setActiveSong({ song, idx, data }));
    dispatch(playPause(true));
  };
  let color = activeSong?.title === song?.title ? "blue" : "rgba(255,255,255, 0.7)";

  return (
    <li
      onClick={handleSetSong}
      className={activeSong?.title === song?.title ? "track active-song" : "track"}
    >
      <div className="row">
        <div className="track-details truncate">
          <h3 className="track-title truncate">{song?.title ?? "Unknown"}</h3>
          <span className="subtitle fs-small">{song?.subtitle ?? "<unknown>"}</span>
        </div>

        <span className="icon">
          {isPlaying && activeSong?.title === song?.title ? (
            <FaRegPauseCircle
              size={30}
              // fill="red"
              fill={color}
              onClick={handlePauseClick}
            />
          ) : (
            <FaRegPlayCircle size={30} fill={"rgba(255,255,255, 0.7)"} onClick={handlePlayClick} />
          )}
        </span>
      </div>
    </li>
  );
}

export default SongRow;
