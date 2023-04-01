import React from "react";

function TrackDetails({ activeSong }) {
  return (
    <div className="track-details truncate">
      <div className="cover-art">
        <img src={activeSong?.images?.coverart ?? activeSong?.img} />
      </div>
      <div className="details">
        <div className="track-name truncate">{activeSong?.title ?? "Unknown"}</div>
        <div className="track-artiste fw-small">{activeSong?.subtitle ?? "<unknown>"}</div>
      </div>
    </div>
  );
}

export default TrackDetails;
