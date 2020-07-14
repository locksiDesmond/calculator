import React from "react";
import Inputs from "./input/Inputs";
import "./index.css";
import Outputs from "./outputs/Outputs";
import Sidenav from "./sidenav.js/Sidenav";

export default function CalculatorUi() {
  return (
    <div className="body">
      <div style={{ backgroundColor: "blue" }} className="sidenav">
        <Sidenav />
      </div>
      <div
        style={{ backgroundColor: "#e5e5e5", color: "#000" }}
        className="calculator"
      >
        <Outputs />
        <Inputs />
      </div>
    </div>
  );
}
