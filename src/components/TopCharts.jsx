import HeaderTemplate from "./HeaderTemplate";
import Error from "./Error";
import Loader from "./Loader";

function TopCharts({ data, isFetching, isError }) {
  return (
    <div className="top-charts options">
      <HeaderTemplate title="Charts" />
      <div className="chart-content">
        {isFetching && <Loader title="Fetching" />}
        {isError && <Error error="Something went wrong" />}
      </div>
    </div>
  );
}

export default TopCharts;
