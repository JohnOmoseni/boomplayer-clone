import React from "react";

function TestVolume({ volume, onVolumeChange, handleVolume }) {
  return (
    <div className="volume-slider">
      <span className="volume-down" onClick={() => handleVolume("decrease")}>
        -
      </span>
      <input
        type="range"
        step="0.2"
        min="0"
        max="1"
        value={volume}
        onChange={onVolumeChange}
        className="volume"
      />
      <span className="volume-up" onClick={() => handleVolume("increase")}>
        +
      </span>
    </div>
  );
}

export default TestVolume;
