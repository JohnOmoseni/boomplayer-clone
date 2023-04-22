import { Link } from "react-router-dom";
import Loader from "../Loader";
import Error from "../Error";

import {
  useGetArtisteDetailsQuery,
  useGetSongDetailsQuery,
} from "../../redux/features/shazamApiSlice";

// import song from "/songdetails.json";
import img from "/bhuda.jpg";
import RelatedSongs from "./RelatedSongs";

function DiscoverTrack({
  activeTab,
  activeSong,
  id,
  closePlayer,
  songData,
  loadingSong,
  fetchingSong,
  isError,
}) {
  const artistid = activeSong?.artists?.[0]?.adamid;
  const songid = activeSong?.key;

  const songAlbum = songData?.sections?.[0]?.metadata?.[0]?.text;
  const songLabel = songData?.sections?.[0]?.metadata?.[1]?.text;
  const songReleaseYear = songData?.sections?.[0]?.metadata?.[2]?.text;
  const songGenre = songData?.genres?.primary;

  return (
    <div className={activeTab === id ? "active discover-track" : "discover-track"}>
      {loadingSong || fetchingSong ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <div className="content">
          <div className="details block">
            <div className="track-details">
              <h2 className="track-title">{songData?.title ?? "Unknown"}</h2>
              <span className="label small-txt">Record Label: {songLabel ?? "<->"}</span>
              <span className="genre small-txt">Genre: {songGenre ?? "<->"}</span>
              <span className="release-year small-txt">
                Release Date: {songReleaseYear ?? "<->"}
              </span>
            </div>

            <Link
              to={`/music/artiste-details/${artistid}`}
              onClick={closePlayer}
              className="artiste-details"
            >
              <img src={songData?.images?.background ?? { img }} className="artiste-img" />
              <span className="artiste-name small-txt">
                Artist: {songData?.subtitle ?? "<unknown>"}
              </span>
            </Link>
            <div className="album-details">
              <img src={songData?.images?.coverArt} className="album-cover" />
              <span className="album-name small-txt">Album: {songAlbum ?? "<unknown>"}</span>
            </div>
          </div>
          <RelatedSongs songid={songid} />
        </div>
      )}
    </div>
  );
}

export default DiscoverTrack;
