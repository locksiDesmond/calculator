import React, { useState, useContext } from "react";
import Inputs from "./input/Inputs";
import "./index.css";
import Outputs from "./output/Outputs";
import SideNav from "./sidenav/Sidenav";
import "./index.css";
import CalculatorContext from '../context/CalculatorContext';

export default function CalculatorUi() {
  const [showNav, setShowNav] = useState(false);
  const { theme, } = useContext(CalculatorContext);

  return (
    <div className="body">
      <div
        style={{ backgroundColor: theme.sidenav, padding: 0 }}
        className={`sidenav ${showNav ? "show" : null}`}
      >
        <SideNav toggle={() => setShowNav(false)} />
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
