import React from "react";
import { Link } from "react-router-dom";
import { useGetWorldChartsQuery } from "../../redux/features/shazamApiSlice";
import HeaderTemplate from "../HeaderTemplate";
import CardTemplate from "../CardTemplate";
import Loader from "../Loader";
import Error from "../Error";

function ArtistsList() {
  const { data, error, isLoading, isError } = useGetWorldChartsQuery();

  return (
    <div className="artists">
      <HeaderTemplate title="Artists" />
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <div className="list-container">
          {data?.map(song => (
            <CardTemplate
              key={song?.key}
              artistCard
              link={`/artists/${song?.artists?.[0].adamid}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArtistsList;
