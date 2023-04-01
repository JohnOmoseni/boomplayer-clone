import React from "react";

function TestSeekbar({ sliderRef, seekValue, onSliderChange, currentTime, duration }) {
  const convertTime = secs => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);

    const returnedMin = minutes < 10 ? `0${minutes}` : minutes;
    const returnedSecs = seconds < 10 ? `0${seconds}` : seconds;
    return `${returnedMin}:${returnedSecs}`;
  };
  return (
    <div className="seek-bar">
      <span className="current-time">
        {!isNaN(currentTime) ? convertTime(currentTime) : "00:00"}
      </span>
      <input
        type="range"
        step="1"
        ref={sliderRef}
        min="0"
        max={duration}
        value={seekValue}
        onChange={onSliderChange}
        className="seek-slider"
      />
      <span className="duration">{!isNaN(duration) && convertTime(duration)}</span>
    </div>
  );
}

export default TestSeekbar;
