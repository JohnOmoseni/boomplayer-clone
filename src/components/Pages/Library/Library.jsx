import React, { useState } from "react";
import LibraryHeader from "./LibraryHeader";
import LibraryContent from "./LibraryContent";
import { useSelector } from "react-redux";
import Artists from "./Artists";
import Albums from "./Albums";
import TabContent from "../../Layouts/Header/TabContent";

function Library() {
  const { currentSongs, activeSong } = useSelector(state => state.player);
  const [activeTab, setActiveTab] = useState("songs");

  const handleTabChange = id => {
    setActiveTab(id);
  };
  return (
    <div className="library-wrapper">
      <LibraryHeader
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        currentSongs={currentSongs}
      />
      <TabContent activeTab={activeTab} id="artists">
        <Artists />
      </TabContent>
      <TabContent activeTab={activeTab} id="albums">
        <Albums />
      </TabContent>
      <TabContent activeTab={activeTab} id="songs">
        <LibraryContent currentSongs={currentSongs} activeSong={activeSong} />
      </TabContent>
    </div>
  );
}

export default Library;
