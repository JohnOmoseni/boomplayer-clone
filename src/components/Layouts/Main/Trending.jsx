import { useGetSongsByCountryQuery } from "../../../redux/features/shazamApiSlice";
import Error from "../../Error";
import Loader from "../../Loader";
import SongDetails from "./SongDetails";
import trendingSongs from "/songsByCountry.json";

function Trending() {
  const { data, error, isFetching, isError } = useGetSongsByCountryQuery();

  return (
    <>
      {isFetching && <Loader title="Fetching" />}
      {isError && <Error error="Something went wrong" />}
      <div className="trending-songs">
        {data?.map((song, idx) => (
          <SongDetails key={song.key} song={song} idx={idx} data={trendingSongs && trendingSongs} />
        ))}
      </div>
    </>
  );
}

export default Trending;
