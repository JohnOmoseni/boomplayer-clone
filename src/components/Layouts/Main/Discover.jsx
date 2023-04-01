import React from "react";
import { useGetWorldChartsQuery } from "../../../redux/features/shazamApiSlice";
import SongCard from "./SongCard";

import test from "/musicdata.json";

function Discover() {
  const { data, error, isLoading, isFetching } = useGetWorldChartsQuery();

  console.log(data);

  // if (isLoading) return <h2>Loading...</h2>;
  // if (error) return <h2>error</h2>;
  return (
    <div className="discover">
      {isFetching && <h2>Fetching...</h2>}
      {test?.map((song, idx) => (
        <SongCard key={song?.key} song={song} idx={idx} data={test} />
      ))}
    </div>
  );
}

export default Discover;
