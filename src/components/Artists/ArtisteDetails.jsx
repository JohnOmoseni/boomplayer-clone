import { useParams } from "react-router-dom";
import { useGetArtisteDetailsQuery } from "../../redux/features/shazamApiSlice";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

import artisteDetails from "/artistedetails.json";
import Top from "./Top";
import ArtisteSongs from "./ArtisteSongs";
import Loader from "../Loader";
import Error from "../Error";

function ArtisteDetails() {
  const { id: artistid } = useParams();
  const { data: artistData, isFetching, isError } = useGetArtisteDetailsQuery(artistid);
  const navigate = useNavigate();

  return (
    <>
      <div className="artiste-page hide-scroll">
        <div className="prev-page icon" onClick={() => navigate(-1)}>
          <MdArrowBackIos />
        </div>
        {isFetching && <Loader title="Fetching" />}
        {isError && <Error error="Something went wrong" />}
        {artistData && (
          <>
            <Top artist={artisteDetails} artiste={artistData} />
            <ArtisteSongs artist={artistData} />
          </>
        )}
      </div>
    </>
  );
}

export default ArtisteDetails;
