import React from "react";
import HeaderTemplate from "../HeaderTemplate";

function Top({ artist }) {
  const artistData = artist?.data?.[0]?.attributes;

  return (
    <div className="cover-details">
      {/* <HeaderTemplate /> */}
      <div className="cover-img">
        <img src={artistData?.artwork?.url} alt="" />
      </div>
      <div className="details">
        <h2 className="artisteData-name">
          {artistData?.name} <span></span>
        </h2>
        <div className="listen-to-artistData">
          <span className="icon"></span>
          <div>Listen to {artistData?.name?.split(" ")[0]}</div>
        </div>
        <div className="id">Shazam ID: {artist?.data?.[0]?.id}</div>
        {/* <div className="bio">Bio: {artistData?.artistBio}</div> */}
        <button className="play">
          <span className="icon"></span>
          Play Songs
        </button>
      </div>
    </div>
  );
}

export default Top;
