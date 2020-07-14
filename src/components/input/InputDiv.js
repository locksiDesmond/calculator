import React, { useContext } from "react";
import { store } from "../../store";
import divide from "../../images/svg/divide.svg";
import * as Types from "../../Types";

export default function InputDiv(props) {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: " 1px solid #EDF0EE",
    fontSize: "1.5rem",
    fontWeight: "bold",
    ...props.style,
  };

  const { dispatch, state } = useContext(store);
  const handleClick = () => {
    if (props.number) {
      if (state.solution) {
        dispatch({ type: Types.CLEARSOLVE });
        dispatch({ type: Types.CLEARVALUE });
      }
      dispatch({ type: Types.INPUTVALUE, payload: props.value });
    } else if (props.delete) {
      dispatch({ type: Types.DELETEVALUE });
    } else if (props.clear) {
      dispatch({ type: Types.CLEARVALUE });
    } else if (props.arithmetic) {
      if (state.solution) {
        const solution = state.solution;
        dispatch({ type: Types.CLEARSOLVE });
        dispatch({ type: Types.CLEARVALUE });
        dispatch({ type: Types.INPUTVALUE, payload: solution });
      }
      dispatch({ type: Types.ARITHMETIC, payload: props.value });
    } else if (props.solve) {
      dispatch({ type: Types.SOLVE });
    }
  };
  return (
    <div onClick={handleClick} style={style}>
      {props.image ? <img src={props.image} alt="arithmetic" /> : props.value}
    </div>
  );
}
