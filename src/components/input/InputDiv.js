import React from "react";

export default function InputDiv(props) {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: " 1px solid #EDF0EE",
  };
  return <div style={style}>{props.value}</div>;
}
