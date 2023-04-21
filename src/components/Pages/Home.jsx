import { useCallback, useState } from "react";
import MusicHeader from "../Layouts/Header/MusicHeader";
import Main from "../Layouts/Main/Main";

function Home() {
  const [activeTab, setActiveTab] = useState("music-tab");

  const handleTabChange = useCallback(id => {
    setActiveTab(id);
  });
  return (
    <>
      <MusicHeader activeTab={activeTab} handleTabChange={handleTabChange} />

      <Main activeTab={activeTab} />
    </>
  );
}

export default Home;
