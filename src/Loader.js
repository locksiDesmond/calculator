import React from "react";
import img from "./images/svg/calculator-loader.svg";
export default function Loader() {
  return (
    <div>
      <p>Loading</p>
      <img src={img} alt="calculator" />
    </div>
  );
}
