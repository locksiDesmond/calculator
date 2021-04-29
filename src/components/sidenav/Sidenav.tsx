import React, { useContext } from "react";
import "./sidenav.css";
import * as Types from "@utils/Types";

import NoLight from "../../images/no_light.svg";
import NoDark from "../../images/no_dark.svg";
import On from "../../images/switch_on.svg";
import Off from "../../images/switch_off.svg";
import CalculatorContext from "@context/CalculatorContext";
interface SideNav  {
  toggle: ()=> void;
}
 const SideNav:React.FC<SideNav> = ({toggle}) =>  {
  const {theme,history, dispatch } = useContext(CalculatorContext);
  return (
    <div
      style={{ backgroundColor: theme.sidenav, color: theme.text }}
      className="sidenav-div"
    >
      <h1>Calculator</h1>
      <p className="by">by Locksi</p>
      <span onClick={() =>toggle()} className="close">
        {theme.mode === "daylight" ? (
          <img src={NoDark} alt="No" />
        ) : (
          <img src={NoLight} alt="No" />
        )}
      </span>

      <div
        style={{ backgroundColor: theme.history, color: theme.historyText }}
        className="toggle"
      >
        <div style={{ display: "flex", width: "-webkit-fill-available" }}>
          {theme.mode === "daylight" ? (
            <span>Daylight mode</span>
          ) : (
            <span> Night mode</span>
          )}

          <span onClick={() => dispatch({ type: Types.TOGGLE_THEME })}>
            {theme.mode === "daylight" ? (
              <img src={Off} alt="off" />
            ) : (
              <img src={On} alt="on" />
            )}
          </span>
        </div>
      </div>
      <span style={{ color: "#e5e5e5", alignSelf: "center" }}>
        Black lives matters
      </span>
      <div
        className="history"
        style={{ backgroundColor: theme.history, color: theme.historyText }}
      >
        <h2>History</h2>
        <ul className="history-list">
          {history.map((item:any) => (
            <li
              className="history-list-item"
              key={item.time}
              onClick={() =>
                dispatch({ type: Types.TIME_TRAVEL, payload: item.history })
              }
            >
              <p className="query">{item.arithmetic}</p>
              <p className="answer">
                <span> =</span>
                <span className="answer-value">{item.solution}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <p className="copyright">&copy; 2020</p>
    </div>
  );
}
export default SideNav