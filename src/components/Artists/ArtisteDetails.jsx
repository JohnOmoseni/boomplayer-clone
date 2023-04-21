import { useParams } from "react-router-dom";
import { useGetArtisteDetailsQuery } from "../../redux/features/shazamApiSlice";

import Top from "./Top";
import ArtisteSongs from "./ArtisteSongs";
import artisteDetails from "/artistedetails.json";
import Loader from "../Loader";
import Error from "../Error";

function ArtisteDetails() {
  const { id: artistid } = useParams();
  const { data: artistData, isFetching, isError } = useGetArtisteDetailsQuery(artistid);

  // if (isFetching) return <Loader title="Fetching" />;
  // if (isError) return <Error error="Something went wrong" />;
  return (
    <div className="artiste-page hide-scroll">
      <Top artist={artisteDetails} artiste={artistData} />
      <ArtisteSongs artist={artisteDetails} artiste={artistData} />
    </div>
  );
}

export default ArtisteDetails;
