import React, { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setPlayerScreen } from "../../../redux/features/popUpSlice";
import PlayPause from "../../PlayPause";

function Player() {
  const { activeSong, isPlaying } = useSelector(state => state.player);
  const dispatch = useDispatch();

  const handleShowPlayScreen = () => {
    console.log("clicked");
    dispatch(setPlayerScreen(true));
  };

  return (
    <div className="player" onClick={handleShowPlayScreen}>
      <div className="song-cover">
        <img src={activeSong?.images?.coverart ?? activeSong?.img} />
      </div>
      <div className="song-details">
        <h3 className="song-title truncate">{activeSong?.title ?? "Unknown"}</h3>
        <span className="song-artiste | fs-small truncate">
          {activeSong?.subtitle ?? "<unknown>"}
        </span>
      </div>
      <div className="controls">
        <PlayPause condition={isPlaying} size={20} />
        <div className="playlist-icon"></div>
      </div>
    </div>
  );
}

export default Player;
