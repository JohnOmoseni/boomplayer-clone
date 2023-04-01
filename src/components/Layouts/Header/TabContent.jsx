import React from "react";

function TabContent({ activeTab, id, children }) {
  return activeTab === id ? children : null;
}

export default TabContent;
