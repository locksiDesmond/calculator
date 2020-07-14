import React, { useState, useEffect, useContext } from "react";
import { store } from "../../store";
import "./output.css";
export default function Outputs(props) {
  const { state } = useContext(store);
  const [currentState, setCurrentState] = useState("");
  useEffect(() => {
    const currentInputInstance = state.currentInput;
    let result = currentInputInstance
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

    result = result.toString().replace(/[/]/g, "divide");
    setCurrentState(result);
  }, [state.currentInput]);
  return (
    <React.Fragment>
      <div className="output">
        <p className="current-input">{currentState}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "1.7rem" }}>=</span>
          <p className="current-answer">&nbsp;{state.solution}</p>
        </div>
      </div>
      <span className="hamburger"> !!!</span>
    </React.Fragment>
  );
}
