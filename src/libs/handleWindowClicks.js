import * as Types from "../Types";
export default function handleWindowClicks(state, dispatch, e) {
  switch (e.key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      if (state.solution) {
        dispatch({ type: Types.CLEARSOLVE });
        dispatch({ type: Types.CLEARVALUE });
      }
      dispatch({ type: Types.INPUTVALUE, payload: e.key });
      break;
    case "/":
    case "+":
    case "-":
    case "X":
    case "*":
    case ".":
    case "%":
      if (state.solution) {
        const solution = state.solution;
        dispatch({ type: Types.CLEARSOLVE });
        dispatch({ type: Types.CLEARVALUE });
        dispatch({ type: Types.INPUTVALUE, payload: solution });
      }
      dispatch({ type: Types.ARITHMETIC, payload: e.key });
      break;
    case "Enter":
      dispatch({ type: Types.SOLVE });
      break;
    default:
      break;
  }
}
