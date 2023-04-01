import React from "react";

function Volume({ volume, onChange }) {
  return (
    <div className="volume-slider">
      <span className="volume-down">-</span>
      <input
        type="range"
        step="0.2"
        min="0"
        max="1"
        value={volume}
        className="volume"
        onChange={onChange}
      />
      <span className="volume-up">+</span>
    </div>
  );
}

export default Volume;
