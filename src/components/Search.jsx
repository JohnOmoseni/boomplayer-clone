import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetSongsBySearchQuery } from "../redux/features/shazamApiSlice";
import SongCard from "./Layouts/Main/SongCard";

import test from "/musicdata.json";

function Search() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search-term");
  const { data, isLoading, isError } = useGetSongsBySearchQuery(searchTerm);
  const [testArray, setTestArray] = useState();

  useEffect(() => {
    if (searchTerm) {
      console.log(searchTerm);
      const value = searchTerm.toLowerCase();
      const filteredSongs = test.filter(
        song =>
          song?.artists?.[0]?.alias.toLowerCase().includes(value) ||
          song?.subtitle.toLowerCase().includes(value)
      );
      console.log(filteredSongs);
      setTestArray(filteredSongs);
    }
  }, []);

  if (isLoading) return <h2>Fetching...</h2>;
  return (
    <div className="search-comp">
      <h3>Top Results</h3>
      {testArray.length > 0 ? (
        testArray?.map((song, idx) => (
          <SongCard key={song?.key} song={song} idx={idx} data={test} />
        ))
      ) : (
        <h1>No items to display</h1>
      )}
    </div>
  );
}

export default Search;
