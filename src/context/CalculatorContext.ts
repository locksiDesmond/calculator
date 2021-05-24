import { createContext, useContext } from 'react';
import { Action } from '../utils/reducer.d';

interface History {
  solution: string;
  arithmetic: string;
  history?: History;
}
export interface State {
  currentInput: string;
  history: History[];
  solution?: string;
  arithmetic: string;
  theme: any;
}
type Dispatch = (action: Action) => void;

const CalculatorContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);
export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within CalculatorProvider');
  }
  return context;
};

export default CalculatorContext;
