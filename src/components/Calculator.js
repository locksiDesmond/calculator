import React, { useState } from "react";
import CalculatorUi from "./CalculatorUi";
import Loader from "../Loader";
import "./index.css";
export default function Calculator(props) {
  // const [loading, setLoading] = useState(true);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 1500);
  //  ${loading ? "show" : null}
  // ${loading ? "none" : null}
  return <CalculatorUi />;

  // return (
  //   <div className="container">
  //     <div className="page1">
  //       <Loader />
  //     </div>
  //     <div className="page2 ">
  //       <calculatorui />
  //     </div>
  //   </div>
  // );
}
