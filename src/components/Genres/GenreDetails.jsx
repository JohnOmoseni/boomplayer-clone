import React from "react";
import { useParams } from "react-router-dom";
import { useGetSongsByGenreQuery } from "../../redux/features/shazamApiSlice";

function GenreDetails() {
  const { genre } = useParams();
  const { data, isLoading, isFetching, error } = useGetSongsByGenreQuery(genre);

  return (
    <div className="genre-page hide-scroll">
      <div className="cover-details">
        {/* <HeaderTemplate /> */}
        <div className="cover-img">
          <img src="/bhuda.jpg" alt="" />
        </div>
        <div className="details"></div>
      </div>

      <div className="artiste">
        <h3>Artists</h3>
        <div className="releases">
          <h3 className="tag">Releases</h3>
        </div>
        <div className="songs">
          <h3 className="tag">Songs</h3>
          <ul className="tracks-content">{songs.map((song, idx) => song)}</ul>
        </div>
      </div>

      <div className="albums">
        <h3>Albums</h3>
        <div className="album-container">
          <div className="album-card"></div>
        </div>
      </div>
    </div>
  );
}

export default GenreDetails;
