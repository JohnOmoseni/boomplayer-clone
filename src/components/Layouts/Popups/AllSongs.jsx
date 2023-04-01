import { current } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSong } from "../../../redux/features/playerSlice";

function AllSongs() {
  const { currentSongs, activeSong } = useSelector(state => state.player);
  const dispatch = useDispatch();
  const numOfSongs =
    currentSongs.length && currentSongs.length > 1
      ? `${currentSongs.length} songs`
      : `${currentSongs.length} song`;

  const handleClick = song => {
    dispatch(setActiveSong({ song }));
  };

  return (
    <div className="playlist">
      <div className="playlist-content">
        <h3 className="playlist-heading">
          Playlist <span>({numOfSongs})</span>
        </h3>
        <ul className="playlist-body">
          {currentSongs.length > 0 &&
            currentSongs.map((track, idx) => {
              return (
                <li
                  className={`track ${
                    activeSong?.title === track?.title && "active-song"
                  } | truncate`}
                  key={idx}
                  onClick={() => handleClick(track)}
                >
                  {track.title}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default AllSongs;
