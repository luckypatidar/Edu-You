import React from "react";
import "./Spinner.scss";

export default ({ fluid = false }) => (
  <div className={fluid ? "wrapper" : null}>
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  </div>
);
