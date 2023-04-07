import { useDispatch } from "react-redux";
import { setActiveSong } from "../../../redux/features/playerSlice";

function LibraryContent({ currentSongs, activeSong }) {
  const dispatch = useDispatch();
  const handleRowClick = (song, idx) => {
    dispatch(setActiveSong({ song, idx }));
  };
  return (
    <ul className="library-content">
      {currentSongs &&
        currentSongs.map((song, idx) => {
          return (
            <li
              onClick={() => handleRowClick(song, idx)}
              className={activeSong?.title === song?.title ? "track active-song" : "track"}
            >
              <div className="track-details truncate">
                <h3 className="track-title truncate">{song?.title ?? "Unknown"}</h3>
                <span className="subtitle fs-small">{song?.subtitle ?? "<unknown>"}</span>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default LibraryContent;
