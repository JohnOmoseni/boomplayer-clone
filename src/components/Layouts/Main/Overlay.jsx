import React from "react";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";

function Overlay({ isPlaying, song, activeSong, handlePauseClick, handlePlayClick }) {
  return (
    <div className={`overlay ${activeSong?.title === song.title && "isActive"}`}>
      {isPlaying && activeSong?.title === song?.title ? (
        <FaRegPauseCircle
          className="icon"
          size={40}
          fill={"rgba(255,255,255, 0.7)"}
          onClick={handlePauseClick}
        />
      ) : (
        <FaRegPlayCircle
          className="icon"
          size={40}
          fill={"rgba(255,255,255, 0.7)"}
          onClick={handlePlayClick}
        />
      )}
    </div>
  );
}

export default Overlay;
