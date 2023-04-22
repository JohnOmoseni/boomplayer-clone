import { useGetSongsByCountryQuery } from "../../../redux/features/shazamApiSlice";
import Error from "../../Error";
import Loader from "../../Loader";
import SongDetails from "./SongDetails";
import trendingSongs from "/songsByCountry.json";

function Trending() {
  const { data, error, isFetching, isError } = useGetSongsByCountryQuery();

  if (isFetching) return <Loader title="Fetching" />;
  if (isError) return <Error error="Something went wrong" />;
  return (
    <div className="trending-songs">
      {data?.map((song, idx) => (
        <SongDetails key={song.key} song={song} idx={idx} data={trendingSongs && trendingSongs} />
      ))}
    </div>
  );
}

export default Trending;
