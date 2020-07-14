import React from "react";
import InputDiv from "./InputDiv";
import "./inputs.css";
export default function Inputs(props) {
  return (
    <div className="inputs">
      <InputDiv clear value="C" />
      <InputDiv value="i" />
      <InputDiv arithmetic value="X" />
      <InputDiv arithmetic value="/" />
      <InputDiv number value="7" />
      <InputDiv number value="8" />
      <InputDiv number value="9" />
      <InputDiv arithmetic value="+" />
      <InputDiv number value="6" />
      <InputDiv number value="5" />
      <InputDiv number value="4" />
      <InputDiv arithmetic value="-" />
      <InputDiv number value="1" />
      <InputDiv number value="2" />
      <InputDiv number value="3" />{" "}
      <InputDiv
        style={{ gridRowStart: "4", gridRowEnd: "6", gridColumnStart: "4" }}
        solve
        value="="
      />
      <InputDiv value="del" delete />
      <InputDiv number value="0" />
      <InputDiv arithmetic value="." />
    </div>
  );
}
