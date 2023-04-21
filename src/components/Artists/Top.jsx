import { BsPlayCircle, BsHeadphones } from "react-icons/bs";

function Top({ artist }) {
  const artistData = artist?.data?.[0]?.attributes;

  return (
    <div className="cover-details">
      <div className="cover-img">
        <img src={artistData?.artwork?.url} alt="" />
      </div>
      <div className="details">
        <h2 className="artisteData-name">
          {artistData?.name} <span></span>
        </h2>
        <div className="listen-to">
          <span className="icon">
            <BsHeadphones size={16} />
          </span>
          <div>Listen to {artistData?.name?.split(" ")[0]}</div>
        </div>
        <div className="id">Shazam ID: {artist?.data?.[0]?.id}</div>
        <div className="bio">Origin: {artistData?.origin}</div>
        <button className="play">
          <span className="icon">
            <BsPlayCircle size={16} />
          </span>
          Play Songs
        </button>
      </div>
    </div>
  );
}

export default Top;
