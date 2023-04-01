import React from "react";
import { useParams } from "react-router-dom";
import { useGetArtisteDetailsQuery } from "../../redux/features/shazamApiSlice";

import Top from "./Top";
import ArtisteSongs from "./ArtisteSongs";
import artisteDetails from "/artistedetails.json";

function ArtisteDetails() {
  const { id: artistid } = useParams();
  const { data: artistData, isLoading, isError, error } = useGetArtisteDetailsQuery(artistid);

  return (
    <div className="artiste-page hide-scroll">
      <Top artist={artisteDetails} artiste={artistData} />
      <ArtisteSongs artist={artisteDetails} artiste={artistData} />
    </div>
  );
}

export default ArtisteDetails;
