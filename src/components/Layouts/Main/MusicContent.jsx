import { useGetWorldChartsQuery } from "../../../redux/features/shazamApiSlice";

import Discover from "./Discover";
import TopRow from "./TopRow";

function MusicContent() {
  const { data, error, isFetching, isError } = useGetWorldChartsQuery();

  return (
    <div className="music-content">
      <TopRow data={data} />
      <Discover data={data} error={error} isFetching={isFetching} isError={isError} />
    </div>
  );
}

export default MusicContent;
