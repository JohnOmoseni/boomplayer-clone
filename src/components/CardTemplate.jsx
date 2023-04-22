import { Link } from "react-router-dom";

function CardTemplate({ artistCard, link, coverimg, title, song }) {
  return (
    <div className="card-template">
      {!artistCard ? (
        <div className="content">
          <div className="card-cover">
            <img src={song?.attributes?.artwork?.url} />
            <div className="overlay">
              <span className="icon"></span>
              <p className="text"></p>
            </div>
          </div>
          <div className="details">
            <h3 className="title truncate">{song ? song?.attributes?.name : "Unknown"}</h3>
            {song && (
              <span className="subtitle fs-small">
                {song?.attributes?.releaseDate?.split("-")[0] ?? "<unknown>"}
              </span>
            )}
          </div>
        </div>
      ) : (
        <Link to={link}>
          <div className="card-cover">
            <img src={coverimg} />
          </div>

          <div className="details">
            <h3 className="title truncate">{title ? title : "Unknown"}</h3>
          </div>
        </Link>
      )}
    </div>
  );
}

export default CardTemplate;
