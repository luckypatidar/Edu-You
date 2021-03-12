import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import ScrollToTop from "./utilities/scrollToTop";
import App from "./App";

import Mock from "./state/mock";
import "./state/database";

Mock.onAny().passThrough();

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("root")
);
