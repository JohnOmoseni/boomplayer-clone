import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../../../redux/features/playerSlice";
import Overlay from "./Overlay";

function SongCard({ song, idx, data }) {
  const { activeSong, isPlaying } = useSelector(state => state.player);
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, idx }));
    dispatch(playPause(true));
  };
  return (
    <div className="song-card">
      <div className="song-cover">
        <img src={song?.images?.coverart} />
        <Overlay
          song={song}
          activeSong={activeSong}
          isPlaying={isPlaying}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      </div>
      <div className="details">
        <h3 className="song-title truncate">{song?.title}</h3>
        <span className="subtitle truncate fs-small ">{song?.subtitle ?? "<unknown>"}</span>
      </div>
    </div>
  );
}

export default SongCard;
