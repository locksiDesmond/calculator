import React, { useState, useEffect, useContext } from "react";
import { store } from "../../store";
import hambugger from "../../images/svg/Menu-dark.svg";
import hambuggerLight from "../../images/svg/Menu-light.svg";
import "./output.css";
export default function Outputs(props) {
  const { state } = useContext(store);
  const [currentState, setCurrentState] = useState("");
  useEffect(() => {
    const currentInputInstance = state.currentInput;
    if (currentInputInstance === "1+1") {
      setCurrentState("you are just too dumb");
    } else if (currentInputInstance === "0+0") {
      setCurrentState("you gotta be kidding me 🤣");
    } else {
      let result = currentInputInstance
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

      result = result.toString().replace(/[*]/g, " X ");
      setCurrentState(result);
    }
  }, [state.currentInput]);
  return (
    <React.Fragment>
      <div
        className="output"
        style={{
          backgroundColor: state.theme.output,
          color: state.theme.outputText,
        }}
      >
        <p className="current-input">{currentState}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "2.7rem" }}>=</span>
          <p className="current-answer" style={{ color: state.theme.adColor }}>
            &nbsp;
            {state.solution &&
              state.solution
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
          </p>
        </div>
      </div>
      <span onClick={() => props.toggle()} className="hamburger">
        {state.theme.mode === "daylight" ? (
          <img src={hambugger} alt="hambugger" />
        ) : (
          <img src={hambuggerLight} alt="hambugger" />
        )}
      </span>
    </React.Fragment>
  );
}