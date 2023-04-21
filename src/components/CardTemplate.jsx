import { Link } from "react-router-dom";

function CardTemplate({ artistCard, link, coverimg, title, subtitle, song }) {
  return (
    <div className="card-template">
      <Link to={link}>
        <div className="card-cover">
          <img src={coverimg} />
          <div className="overlay">
            <span className="icon"></span>
            <p className="text"></p>
          </div>
        </div>

        <div className="details">
          <h3 className="title truncate">
            {title ? title : song ? song?.attributes?.name : "Asake"}
          </h3>
          {song && (
            <span className="subtitle fs-small">
              {song?.attributes?.releaseDate?.split("-")[0] ?? "<unknown>"}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}

export default CardTemplate;
