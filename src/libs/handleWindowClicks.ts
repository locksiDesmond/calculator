import * as Types from "../utils/Types";
import { Action } from '@utils/reducer.d';
export default function handleWindowClicks(solution:string, dispatch:(a: Action)=> void, e:any) {
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
      if (solution) {
        dispatch({ type: Types.CLEAR_SOLVE });
        dispatch({ type: Types.CLEAR });
      }
      dispatch({ type: Types.INPUT_VALUE, payload: e.key });
      break;
    case "/":
    case "+":
    case "-":
    case "X":
    case "*":
    case ".":
    case "%":
      if (solution) {
        dispatch({ type: Types.CLEAR_SOLVE });
        dispatch({ type: Types.CLEAR });
        dispatch({ type: Types.INPUT_VALUE, payload: solution });
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
