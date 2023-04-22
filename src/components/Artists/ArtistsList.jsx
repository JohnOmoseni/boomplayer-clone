import { useGetWorldChartsQuery } from "../../redux/features/shazamApiSlice";
import HeaderTemplate from "../HeaderTemplate";
import CardTemplate from "../CardTemplate";
import Loader from "../Loader";
import Error from "../Error";

function ArtistsList() {
  const { data, isLoading, isError } = useGetWorldChartsQuery();

  return (
    <div className="artist-list options">
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
              title={song?.artists[0]?.alias}
              coverimg={song?.images?.background}
              link={`/music/artiste-details/${song?.artists?.[0].adamid}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArtistsList;
