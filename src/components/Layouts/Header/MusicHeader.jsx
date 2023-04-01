import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import TabNav from "./TabNav";

function MusicHeader({ activeTab, handleTabChange }) {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleSearch = e => {
    e.preventDefault();
    const search = inputRef.current.value;

    navigate(`/search?search-term=${search}`);
  };

  return (
    <div className="header">
      <div className="tabs">
        <TabNav activeTab={activeTab} id={"music-tab"} title={"Music"} onClick={handleTabChange} />
        <TabNav
          activeTab={activeTab}
          id={"trending-tab"}
          title={"Trending"}
          onClick={handleTabChange}
        />
        <div className="activeTab-indicator"></div>
      </div>
      <div className="search-box">
        <span className="search-icon icon">
          <FiSearch />
        </span>
        <form onSubmit={handleSearch}>
          <input ref={inputRef} type="search" placeholder="Asake" className="search-field" />
        </form>
      </div>
    </div>
  );
}

export default MusicHeader;
