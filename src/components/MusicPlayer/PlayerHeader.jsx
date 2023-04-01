import React from "react";
import TabNav from "../Layouts/Header/TabNav";

function PlayerHeader({ headerRef, activeTab, handleTabChange, closePlayer }) {
  return (
    <div className="heading" ref={headerRef}>
      <div className="close-player icon" onClick={closePlayer}>
        &lt;
      </div>
      <div className="tabs">
        <TabNav
          activeTab={activeTab}
          id="discover-tab"
          title="Discover"
          onClick={handleTabChange}
        />
        <TabNav activeTab={activeTab} id="music-tab" title="Music" onClick={handleTabChange} />
        <TabNav activeTab={activeTab} id="lyrics-tab" title="Lyrics" onClick={handleTabChange} />
      </div>
    </div>
  );
}

export default PlayerHeader;
