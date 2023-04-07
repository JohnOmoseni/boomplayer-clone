import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveSong } from "../../../redux/features/playerSlice";

function SongDetails({ song, data, idx }) {
  const { activeSong } = useSelector(state => state.player);
  const dispatch = useDispatch();

  const handleSetSong = () => {
    dispatch(setActiveSong({ song, idx, data }));
  };
  return (
    <div
      className={`track-details ${activeSong?.title === song.title && "active"}`}
      onClick={() => handleSetSong()}
    >
      <div className="track-cover">
        <img src={song?.images?.background} alt="" />
      </div>
      <div className="details truncate">
        <h2 className="track-title truncate">{song?.title}</h2>
        <Link to={`artiste-details/${song?.artists?.[0]?.adamid}`}>
          <span className="track-artiste | fs-small">{song?.subtitle}</span>
        </Link>
      </div>
      <div className="options">
        <div className="add-to-favorite"></div>
      </div>
    </div>
  );
}

export default SongDetails;
