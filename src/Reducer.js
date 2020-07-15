import * as Types from "./Types";
import { InputValue, handleArithmetic, Solve } from "./libs/handleInput";
import { Daylight, NightMode } from "./ThemeColor";
export function Reducer(state, action) {
  const { history, currentInput } = state;
  switch (action.type) {
    case Types.INPUTVALUE:
      const data = InputValue(action.payload, currentInput);
      return { ...state, currentInput: data };
    case Types.CLEARVALUE:
      return { ...state, currentInput: "" };
    case Types.DELETEVALUE:
      const value = currentInput.slice(0, currentInput.length - 1);
      return { ...state, currentInput: value };
    case Types.ARITHMETIC:
      const result = handleArithmetic(action.payload, currentInput);
      return { ...state, currentInput: result };
    case Types.SOLVE:
      const solution = Solve(currentInput);
      return { ...state, solution };
    case Types.CLEARSOLVE:
      const stateSolution = state.solution;
      const stateArithmetic = state.currentInput;
      return {
        ...state,
        solution: "",
        history: [
          ...history,
          {
            solution: stateSolution,
            arithmetic: stateArithmetic,
            history: { ...state },
          },
        ],
      };
    case Types.TOGGLETHEME:
      if (state.theme.mode === "daylight") {
        return { ...state, theme: NightMode };
      } else {
        return { ...state, theme: Daylight };
      }
    case Types.TiMETRAVEL:
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}
