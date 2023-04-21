import { useGetSongDetailsQuery } from "../../redux/features/shazamApiSlice";
import Loader from "../Loader";
import song from "/songdetails.json";

function Lyrics({ activeTab, activeSong, id, songData, isLoading, isError }) {
  let lyrics;
  if (songData?.sections?.[1]?.type === "LYRICS") {
    lyrics = song?.sections?.[1]?.text;
  }

  return (
    <div className={activeTab === id ? "active lyrics-content" : "lyrics-content"}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="content">
          <h3 className="title">Song Lyrics: Adele</h3>
          <div className="lyrics">
            {lyrics && lyrics?.length > 0 ? (
              lyrics.map(line => <p>{line}</p>)
            ) : (
              <p className="no-lyrics">
                Sorry! There are no lyrics to display. E be like say you go just dey chop mouth dey
                go
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Lyrics;
