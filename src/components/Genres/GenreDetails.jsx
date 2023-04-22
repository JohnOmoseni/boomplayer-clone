import { useParams } from "react-router-dom";
import { useGetSongsByGenreQuery } from "../../redux/features/shazamApiSlice";
import Error from "../Error";
import HeaderTemplate from "../HeaderTemplate";
import SongCard from "../Layouts/Main/SongCard";
import Loader from "../Loader";

function GenreDetails() {
  const { genre } = useParams();
  const rndNo = Math.floor(Math.random() * 50 - 1);
  const { data, isFetching, isError } = useGetSongsByGenreQuery(genre);

  console.log(genre);
  const imgSrc = data?.[rndNo]?.images?.coverarthq;
  return (
    <>
      <div className="genre-details hide-scroll">
        <HeaderTemplate title={genre} />
        <div className="cover-details">
          <div className="cover-img">
            <img src={imgSrc} alt="" />
          </div>
          <div className="details"></div>
        </div>

        <div className="genre-songs">
          <h3 className="tag">Songs</h3>
          {isFetching && <Loader title="Fetching" />}
          {isError && <Error error="Something went wrong" />}
          {data?.length > 0 && (
            <ul className="tracks-content">
              {data?.map((song, idx) => (
                <SongCard key={song?.key} song={song} idx={idx} data={data} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default GenreDetails;
