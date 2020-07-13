import React from "react";
import Buttons from "./button";
import "./calculator.css";

function Numbers(props) {
  return (
    <div className="numbers">
      <div className="row">
        <Buttons onClick={() => props.val("clear")} value={"C"} />
        <Buttons onClick={() => props.val("open")} value={"("} />
        <Buttons onClick={() => props.val("close")} value={")"} />
        <Buttons onClick={() => props.val("times")} value={"X"} />
        <Buttons onClick={() => props.val("divide")} value={"/"} />
      </div>
      <div className="row">
        <Buttons onClick={() => props.val("X")} value={"delete"} />
        <Buttons onClick={() => props.val(7)} value={"7"} />
        <Buttons onClick={() => props.val(8)} value={"8"} />
        <Buttons onClick={() => props.val(9)} value={"9"} />
        <Buttons onClick={() => props.val("subtract")} value={"-"} />
      </div>
      <div className="row">
        <Buttons onClick={() => props.val(0)} value={"0"} />
        <Buttons onClick={() => props.val(4)} value={"4"} />
        <Buttons onClick={() => props.val(5)} value={"5"} />
        <Buttons onClick={() => props.val(6)} value={"6"} />
        <Buttons onClick={() => props.val("add")} value={"+"} />
      </div>
      <div className="row">
        <Buttons value={"X"} />
        <Buttons onClick={() => props.val(1)} value={"1"} />
        <Buttons onClick={() => props.val(2)} value={"2"} />
        <Buttons onClick={() => props.val(3)} value={"3"} />
        <Buttons onClick={() => props.val("=")} value={"Enter"} />
      </div>
    </div>
  );
}

export default Numbers;
