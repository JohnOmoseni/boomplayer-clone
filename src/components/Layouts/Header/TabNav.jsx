import React from "react";

function TabNav({ activeTab, id, title, onClick }) {
  return (
    <div
      onClick={() => onClick(id)}
      className={activeTab === id ? `active-tab ${id} tab` : `${id} tab`}
    >
      {title}
    </div>
  );
}

export default TabNav;
