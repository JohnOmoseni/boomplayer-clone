import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetSongsBySearchQuery } from "../redux/features/shazamApiSlice";
import HeaderTemplate from "./HeaderTemplate";
import SongCard from "./Layouts/Main/SongCard";
import Loader from "./Loader";

import test from "/musicdata.json";
import "/sass/pages/Search.scss";

function Search() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search-term");
  const { data, isLoading, isError } = useGetSongsBySearchQuery(searchTerm);
  const [testArray, setTestArray] = useState();

  useEffect(() => {
    if (searchTerm) {
      const value = searchTerm.toLowerCase();
      const filteredSongs = test.filter(
        song =>
          song?.artists?.[0]?.alias.toLowerCase().includes(value) ||
          song?.subtitle.toLowerCase().includes(value)
      );
      console.log(filteredSongs);
      setTestArray(filteredSongs);
    }
  }, [searchTerm]);

  if (isLoading) return <Loader title="Fetching" />;
  return (
    <div className="search-comp">
      <HeaderTemplate title="Search" url="/music" />
      <h2>Top Results</h2>
      <div className="content">
        {testArray.length > 0 ? (
          testArray?.map((song, idx) => (
            <SongCard key={song?.key} song={song} idx={idx} data={test} />
          ))
        ) : (
          <h3 className="no-items">No items to display</h3>
        )}
      </div>
    </div>
  );
}

export default Search;
