import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/scss/style.scss";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
