import { useParams } from "react-router-dom";
import { useGetSongsByGenreQuery } from "../../redux/features/shazamApiSlice";
import CardTemplate from "../CardTemplate";
import Error from "../Error";
import HeaderTemplate from "../HeaderTemplate";
import Loader from "../Loader";

import songs from "/songsByGenre.json";

function GenreDetails() {
  const { genre } = useParams();
  const { data, isFetching, isError } = useGetSongsByGenreQuery(genre);

  console.log(genre);
  return (
    <>
      <div className="genre-page hide-scroll">
        <HeaderTemplate title={genre} />
        <div className="cover-details">
          <div className="cover-img">
            <img src="/bhuda.jpg" alt="" />
          </div>
          <div className="details"></div>
        </div>

        <div className="artiste-songs">
          <h3>Artists</h3>
          <div className="releases">
            <h3 className="tag">Releases</h3>
          </div>
          <div className="songs">
            <h3 className="tag">Songs</h3>
            {isFetching && <Loader title="Fetching" />}
            {isError && <Error error="Something went wrong" />}
            <ul className="tracks-content">
              {songs.map((song, idx) => (
                <CardTemplate song={song} idx={idx} />
              ))}
            </ul>
          </div>
        </div>

        <div className="albums">
          <h3>Albums</h3>
          <div className="album-container">
            <div className="album-card"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GenreDetails;
