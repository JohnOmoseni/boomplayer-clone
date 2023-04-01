import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderTemplate({ title }) {
  const navigate = useNavigate();
  return (
    <div className="header-template">
      <div className="prev-page icon" onClick={() => navigate(-1)}>
        &lt;
      </div>
      <h2 className="title">{title ? title : ""}</h2>
    </div>
  );
}

export default HeaderTemplate;
