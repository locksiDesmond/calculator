import { createContext } from "react";
import { Daylight } from "@utils/ThemeColor";
import { Action } from '@utils/reducer.d';

interface History {
     solution:string,
     arithmetic:string,
     history?: History,
};
interface InitialState  {
  currentInput: string,
  history: History[],
  solution?:string;
  arithmetic: string,
  theme:any,
  dispatch?:(a:Action)=> void;
};

export const InitialState:InitialState= {
  currentInput: "",
  history: [],
  arithmetic: "",
  theme: Daylight,
};
const CalculatorContext = createContext(InitialState);

export default CalculatorContext 