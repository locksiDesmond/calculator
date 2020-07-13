import React from "react";
import "./index.css";
import Inputs from "./input/Inputs";
import Outputs from "./outputs/Outputs";
export default function CalculatorUi() {
  return (
    <div className="body">
      <div style={{ backgroundColor: "blue" }} className="sidenav">
        <p>sideNav</p>
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
