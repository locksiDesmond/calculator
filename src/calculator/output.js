import React from "react";
import "./calculator.css";
import Button from "../MasterComponent/Button";

function Output(props) {
  return (
    <div className="Output">
      <span>{props.value}</span>
      <Button value="Submit" />
    </div>
  );
}

export default Output;
