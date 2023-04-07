import { Link } from "react-router-dom";
import { useGetSongsRelatedQuery } from "../../redux/features/shazamApiSlice";
import Error from "../Error";
import Loader from "../Loader";
import SongRow from "./SongRow";

import relatedSongs from "/songsRelated.json";

function RelatedSongs({ songid }) {
  const { data, isFetching, error, isError } = useGetSongsRelatedQuery(songid);

  return (
    <div className="related-songs">
      <div className="top">
        <h3>Related Songs</h3>
      </div>
      <ul className="body block">
        {/* {isFetching ? (
          <Loader />
        ) : isError ? (
          <Error error={error} />
        ) : ( */}
        {relatedSongs?.map((song, idx) => (
          <SongRow key={song?.key} song={song} idx={idx} data={relatedSongs} />
        ))}
        {/* )} */}
      </ul>
    </div>
  );
}

export default RelatedSongs;
