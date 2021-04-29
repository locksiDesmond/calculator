import React, { useContext, useEffect, useCallback } from "react";
import InputDiv from "./InputDiv";
import "./inputs.css";
import divide from "../../images/divide.svg";
import deleteIcon from "../../images/delete.svg";
import handleWindowClicks from "./../../libs/handleWindowClicks";
import CalculatorContext from "../../context/CalculatorContext";

export default function Inputs() {
  const {theme,solution , dispatch } = useContext(CalculatorContext);
  const windowClick = useCallback(
    (e) => {
      handleWindowClicks(solution, dispatch, e);
    },
    [solution, dispatch]
  );
  useEffect(() => {
    window.addEventListener("keyup", windowClick);

    return () => {
      window.removeEventListener("keyup", windowClick);
    };
  }, [windowClick]);
  const numberStyle = {
    backgroundColor: theme.numbers,
    color: "#fff",
  };
  const arithmeticStyle = {
    backgroundColor: theme.arithmetics,
    color: "#000",
  };
  const adStyle = {
    backgroundColor: theme.adStyle,
    color: theme.adColor,
  };
  return (
    <div className="inputs">
      <InputDiv style={adStyle} clear value="C" />
      <InputDiv style={arithmeticStyle} arithmetic value="%" />
      <InputDiv style={arithmeticStyle} arithmetic value="X" />
      <InputDiv style={arithmeticStyle} arithmetic value="/" image={divide} />
      <InputDiv style={numberStyle} number value="7" />
      <InputDiv style={numberStyle} number value="8" />
      <InputDiv style={numberStyle} number value="9" />
      <InputDiv style={arithmeticStyle} arithmetic value="+" />
      <InputDiv style={numberStyle} number value="6" />
      <InputDiv style={numberStyle} number value="5" />
      <InputDiv style={numberStyle} number value="4" />
      <InputDiv style={arithmeticStyle} arithmetic value="-" />
      <InputDiv number style={numberStyle} value="1" />
      <InputDiv style={numberStyle} number value="2" />
      <InputDiv style={numberStyle} number value="3" />{" "}
      <InputDiv
        style={{
          gridRowStart: "4",
          gridRowEnd: "6",
          gridColumnStart: "4",
          ...adStyle,
        }}
        solve
        value="="
      />
      <InputDiv image={deleteIcon} style={adStyle} value="del" delete />
      <InputDiv style={numberStyle} number value="0" />
      <InputDiv style={arithmeticStyle} arithmetic value="." />
    </div>
  );
}
