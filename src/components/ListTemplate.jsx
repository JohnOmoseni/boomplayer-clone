import React from "react";
import CardTemplate from "./CardTemplate";

const cards = [];
for (let i = 0; i < 20; i++) {
  cards.push(<CardTemplate key={i} />);
}
function ListTemplate({ list }) {
  return <div className="list-container">{cards.map(card => card)}</div>;
}

export default ListTemplate;
