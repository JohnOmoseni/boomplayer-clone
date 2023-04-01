import React from "react";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import TabNav from "../../Layouts/Header/TabNav";

function LibraryHeader({ activeTab, handleTabChange, currentSongs }) {
  const navigate = useNavigate();
  const songsLength =
    currentSongs && currentSongs.length > 0 ? `(${currentSongs.length}) songs` : "(0) song";

  return (
    <div className="heading">
      <div className="top-nav">
        <span className="prev-page" onClick={() => navigate("/music")}>
          &lt;
        </span>
        <h3 className="library-title">Library</h3>
      </div>

      <div className="tabs">
        <TabNav activeTab={activeTab} id="songs" title="Songs" onClick={handleTabChange} />
        <TabNav activeTab={activeTab} id="artists" title="Artists" onClick={handleTabChange} />
        <TabNav activeTab={activeTab} id="albums" title="Albums" onClick={handleTabChange} />
        <div className="activeTab-indicator"></div>
      </div>

      <div className="play-all">
        <div className="column">
          <FaRegPlayCircle size={30} fill={"rgba(255,255,255, 0.7)"} className="play-circle icon" />
          <h3>
            Play All <span className="fs-small">{songsLength}</span>
          </h3>
        </div>
        <FaRegPauseCircle className="icon" />
      </div>
    </div>
  );
}

export default LibraryHeader;
