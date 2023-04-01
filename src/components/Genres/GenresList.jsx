import React from "react";
import { Link } from "react-router-dom";
import { genres } from "../../constants/genre";

import HeaderTemplate from "../HeaderTemplate";

function GenresList() {
  return (
    <div className="genres-list">
      <HeaderTemplate title="Genres" />
      <div className="genres list-container">
        {genres.map(({ title, value }) => {
          return (
            <Link to={`/music/genres/${title}`} key={value} className="genre-card">
              <div>
                <h3 className="title truncate">{title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default GenresList;
