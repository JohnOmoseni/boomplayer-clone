import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import { AudioStateProvider } from "./Context/AudioStateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AudioStateProvider>
          <App />
        </AudioStateProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
