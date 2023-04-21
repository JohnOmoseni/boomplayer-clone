import TabContent from "../Header/TabContent";
import MusicContent from "./MusicContent";
import Trending from "./Trending";

function Main({ activeTab }) {
  return (
    <main>
      <TabContent activeTab={activeTab} id="music-tab">
        <MusicContent />
      </TabContent>
      <TabContent activeTab={activeTab} id="trending-tab">
        <Trending />
      </TabContent>
    </main>
  );
}

export default Main;
