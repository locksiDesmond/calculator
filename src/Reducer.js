import * as Types from "./utils/Types";
import { InputValue, handleArithmetic, Solve } from "./libs/handleInput";
import { Daylight, NightMode } from "./utils/ThemeColor";
export function Reducer(state, action) {
  const { history, currentInput } = state;
  switch (action.type) {
    case Types.INPUT_VALUE:
      const data = InputValue(action.payload, currentInput);
      return { ...state, currentInput: data };
    case Types.CLEAR:
      return { ...state, currentInput: "" };
    case Types.DELETE:
      const value = currentInput.slice(0, currentInput.length - 1);
      return { ...state, currentInput: value };
    case Types.ARITHMETIC:
      const result = handleArithmetic(action.payload, currentInput);
      return { ...state, currentInput: result };
    case Types.SOLVE:
      const solution = Solve(currentInput);
      return { ...state, solution };
    case Types.CLEAR_SOLVE:
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
    case Types.TOGGLE_THEME:
      if (state.theme.mode === "daylight") {
        return { ...state, theme: NightMode };
      } else {
        return { ...state, theme: Daylight };
      }
    case Types.TIME_TRAVEL:
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}
