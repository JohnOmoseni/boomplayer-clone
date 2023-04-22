import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import CardTemplate from "../CardTemplate";

function ArtisteSongs({ artist }) {
  const { activeSong } = useSelector(state => state.player);
  const dispatch = useDispatch();
  const songData = artist?.data?.[0]?.views?.["top-songs"]?.data;
  const albumData = artist?.data?.[0]?.views?.["full-albums"]?.data;

  const handleSetSong = (songObj, idx) => {
    const song = {
      title: songObj?.attributes?.name,
      subtitle: songObj?.attributes?.artistName,
      img: songObj?.attributes?.artwork?.url,
      url: songObj?.attributes?.previews?.[0]?.url,
    };

    dispatch(setActiveSong({ song, songData, idx }));
    dispatch(playPause(true));
  };

  return (
    <div className="artiste-songs">
      <div className="releases">
        <h3 className="tag">Releases</h3>
        <div className="artiste-tracks hide-scroll">
          {albumData.map((song, idx) => (
            <CardTemplate song={song} idx={idx} />
          ))}
        </div>
      </div>

      <div className="songs">
        <h3 className="tag">Songs</h3>
        <ul className="tracks-content">
          {songData.map((song, idx) => (
            <li
              className={
                activeSong?.title === song?.attributes?.name ? "active-song track" : "track"
              }
              key={idx}
              onClick={() => handleSetSong(song, idx)}
            >
              <div className="track-details truncate">
                <h3 className="track-title truncate">{song?.attributes?.name ?? "Unknown"}</h3>
                <span className="subtitle fs-small">
                  {song?.attributes?.artistName ?? "<unknown>"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArtisteSongs;
