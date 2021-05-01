import React, { useReducer } from 'react';
import CalculatorContext, { State } from '../context/CalculatorContext';
import { Daylight } from '../utils/ThemeColor';
import { Reducer } from '../utils/Reducer';

const InitialState: State = {
  currentInput: '',
  history: [],
  arithmetic: '',
  theme: Daylight,
};

const { Provider } = CalculatorContext;
const CalculatorProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default CalculatorProvider;
