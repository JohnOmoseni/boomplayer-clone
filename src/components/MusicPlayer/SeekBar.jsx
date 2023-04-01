import React from "react";

function SeekBar({ sliderRef, currentTime, duration, handleSliderChange }) {
  const formatTime = secs => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <>
      <div className="seek-bar">
        <div className="current-time">{currentTime ? formatTime(currentTime) : "00:00"}</div>
        <input
          ref={sliderRef}
          type="range"
          min="0"
          max={duration && duration}
          defaultValue="0"
          onChange={handleSliderChange}
          className="seek-slider"
        />
        <div className="total-duration">
          {duration && !isNaN(duration) ? formatTime(duration) : "00:00"}
        </div>
      </div>
    </>
  );
}

export default SeekBar;
