import React, { useContext } from "react";
import "./sidenav.css";
import * as Types from "../../Types";
import No from "../../images/svg/No.svg";
import On from "../../images/svg/Switch On.svg";
import Off from "../../images/svg/Switch off.svg";
import { store } from "../../store";
export default function Sidenav(props) {
  const { state, dispatch } = useContext(store);
  const { theme } = state;
  return (
    <div
      style={{ backgroundColor: theme.sidenav, color: theme.text }}
      className="sidenav-div"
    >
      <h1>Calculator</h1>
      <p className="by">by Locksi</p>
      <span onClick={() => props.toggle()} className="close">
        <img src={No} alt="No" />
      </span>

      <div
        style={{ backgroundColor: theme.history, color: theme.historyText }}
        className="toggle"
      >
        <div style={{ display: "flex", width: "-webkit-fill-available" }}>
          Night mode
          <span onClick={() => dispatch({ type: Types.TOGGLETHEME })}>
            {theme.mode === "daylight" ? (
              <img src={Off} alt="off" />
            ) : (
              <img src={On} alt="on" />
            )}
          </span>
        </div>
      </div>
      <div
        className="history"
        style={{ backgroundColor: theme.history, color: theme.historyText }}
      >
        <h2>History</h2>
        <ul className="history-list">
          {state.history.map((item, index) => (
            <li className="history-list-item">
              <p className="query">{item.arithmetic}</p>
              <p className="answer">
                <span> =</span>
                <span className="answer-value">{item.solution}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
