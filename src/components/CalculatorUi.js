import React, { useState, useContext } from "react";
import Inputs from "./input/Inputs";
import "./index.css";
import Outputs from "./outputs/Outputs";
import Sidenav from "./sidenav.js/Sidenav";
import { store } from "../store";

export default function CalculatorUi() {
  const [showNav, setShowNav] = useState(false);
  const { state } = useContext(store);
  const { theme } = state;

  return (
    <div className="body">
      <div
        style={{ backgroundColor: theme.sidenav, padding: 0 }}
        className={`sidenav ${showNav ? "show" : null}`}
      >
        <Sidenav toggle={() => setShowNav(false)} />
      </div>
      <div
        style={{ backgroundColor: "#e5e5e5", color: "#000" }}
        className="calculator"
      >
        <Outputs toggle={() => setShowNav(true)} />
        <Inputs />
      </div>
    </div>
  );
}
