import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import storeConfig from "./App/store/storeConfig";

import App from "./App/App";

ReactDOM.render(
  <Provider store={storeConfig()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
