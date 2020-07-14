import * as Types from "./Types";
import { InputValue, handleArithmetic, Solve } from "./libs/handleInput";
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
      console.log({ stateSolution, stateArithmetic });
      return {
        ...state,
        solution: "",
        history: [
          ...history,
          { solution: stateSolution, arithmetic: stateArithmetic },
        ],
      };

    default:
      throw new Error();
  }
}
