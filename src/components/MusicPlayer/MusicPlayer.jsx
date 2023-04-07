import { useState, useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlayerScreen } from "../../redux/features/popUpSlice";
import TestWithContext from "../../Hooks/TestWithContext";

import DiscoverTrack from "./DiscoverTrack";
import PlayerHeader from "./PlayerHeader";
import TrackDetails from "./TrackDetails";
import Lyrics from "./Lyrics";
import { useGetSongDetailsQuery } from "../../redux/features/shazamApiSlice";
import TabContent from "../Layouts/Header/TabContent";

function MusicPlayer() {
  const [activeTab, setActiveTab] = useState("music-tab");
  const { showPlayerScreen } = useSelector(state => state.popUps);
  const { activeSong } = useSelector(state => state.player);
  const dispatch = useDispatch();

  const artistid = activeSong?.artists?.[0]?.adamid;
  const songid = activeSong?.key;

  const {
    data: songData,
    isLoading: loadingSong,
    isFetching: fetchingSong,
    isError,
  } = useGetSongDetailsQuery(songid, {
    skip: !songid,
  });

  const musicPlayer = useRef();
  const headerRef = useRef();

  const handleClosePlayScreen = useCallback(() => {
    dispatch(setPlayerScreen(false));
  }, [showPlayerScreen]);

  useEffect(() => {
    const height = headerRef.current.offsetHeight;
    musicPlayer.current.style.setProperty("--header-height", `${height}px`);
  }, []);

  useEffect(() => {
    let id;
    if (!showPlayerScreen) {
      id = setTimeout(() => {
        musicPlayer.current.style.display = "none";
      }, 800);
    } else {
      musicPlayer.current.style.display = "block";
    }

    return () => {
      clearTimeout(id);
    };
  }, [showPlayerScreen]);

  const handleTabChange = id => {
    setActiveTab(id);
  };
  return (
    <div
      ref={musicPlayer}
      className={`${showPlayerScreen ? "showPlayer music-player" : "music-player"}`}
    >
      <PlayerHeader
        headerRef={headerRef}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        closePlayer={handleClosePlayScreen}
      />

      <div className="body">
        <TabContent activeTab={activeTab} id="discover-tab">
          <DiscoverTrack
            activeTab={activeTab}
            activeSong={activeSong}
            id="discover-tab"
            songData={songData}
            loadingSong={loadingSong}
            fetchingSong={fetchingSong}
            isError={isError}
            closePlayer={handleClosePlayScreen}
          />
        </TabContent>

        <TabContent activeTab={activeTab} id="lyrics-tab">
          <Lyrics
            activeTab={activeTab}
            id="lyrics-tab"
            activeSong={activeSong}
            songData={songData}
            isLoading={loadingSong}
          />
        </TabContent>

        <div className={activeTab === "music-tab" ? "active music-content" : "music-content"}>
          <TrackDetails activeSong={activeSong} />

          <TestWithContext />
          {/* <Index /> */}
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
