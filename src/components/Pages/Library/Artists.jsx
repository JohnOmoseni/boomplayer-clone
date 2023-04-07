import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Artists() {
  const { activeSong, currentSongs } = useSelector(state => state.player);

  const artistSongs = subtitle => {
    const noOfSongs = currentSongs.filter(song => song.subtitle === subtitle).length;

    console.log(noOfSongs, currentSongs, subtitle);
    if (noOfSongs) {
      const value = noOfSongs > 1 ? `${noOfSongs} songs` : `${noOfSongs} song`;
      return value;
    }
    return "-";
  };

  return (
    <>
      <nav className="list-length">
        <span className="fs-small">({currentSongs && currentSongs.length})</span>
      </nav>
      <div className="artists-container">
        {currentSongs.length > 0 &&
          currentSongs.map((song, idx) => (
            <div
              key={song.key}
              className={`track-details ${activeSong?.title === song.title && "active"}`}
            >
              <div className="track-cover">
                <img src={song?.images?.background} alt="" />
              </div>
              <div className="details truncate">
                <Link to={`/music/artiste-details/${song?.artists?.[0]?.adamid}`}>
                  <h2 className="track-title truncate">{song?.subtitle}</h2>
                </Link>
                <span className="track-artiste | fs-small">{artistSongs(song?.subtitle)}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Artists;
