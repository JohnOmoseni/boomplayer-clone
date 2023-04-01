import React from "react";
import SongDetails from "./SongDetails";
import trendingSongs from "/songsByCountry.json";

function Trending() {
  return (
    <div className="trending-songs">
      {trendingSongs.map((song, idx) => (
        <SongDetails key={song.key} song={song} idx={idx} data={trendingSongs && trendingSongs} />
      ))}
    </div>
  );
}

export default Trending;
