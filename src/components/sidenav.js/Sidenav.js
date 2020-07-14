import React, { useContext } from "react";
import "./sidenav.css";
import { store } from "../../store";
export default function Sidenav() {
  const { state } = useContext(store);
  return (
    <div className="sidenav-div">
      <h1>Calculator</h1>
      <p className="by">by Locksi</p>
      <span className="close">X</span>
      <div className="toggle">
        <p>
          Night mode <span> toggle</span>
        </p>
      </div>
      <div className="history" style={{ backgroundColor: "#fff" }}>
        <h2>History</h2>
        <ul className="history-list">
          {state.history.map((item, index) => (
            <li className="history-list-item">
              <p className="query">{item.arithmetic}</p>
              <p className="answer">
                <span> =</span>{" "}
                <span className="answer-value">{item.solution}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
