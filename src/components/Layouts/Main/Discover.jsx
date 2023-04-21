import Loader from "../../Loader";
import Error from "../../Error";
import SongCard from "./SongCard";

// import test from "/musicdata.json";

function Discover({ data, error, isFetching, isError }) {
  console.log(data);

  return (
    <div className="discover">
      {isFetching && <Loader title="Fetching" />}
      {isError && <Error error="Something went wrong" />}
      {data?.map((song, idx) => (
        <SongCard key={song?.key} song={song} idx={idx} data={data} />
      ))}
    </div>
  );
}

export default Discover;
