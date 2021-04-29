import React,{ useReducer } from "react";
import CalculatorContext,{ InitialState } from "../context/CalculatorContext";
import { Reducer } from "../utils/Reducer";


const { Provider } =CalculatorContext;
const CalculatorProvider = ({ children }:{children:React.ReactNode}) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  return (<Provider value={{ ...state, dispatch }}>{children}</Provider>);
};

export default CalculatorProvider;
