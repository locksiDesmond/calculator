import CalculatorContext,{ InitialState } from "@context/CalculatorContext";
import { Reducer } from "@utils/Reducer";
import { useReducer } from "react";


const { Provider } =CalculatorContext;
const CalculatorProvider = ({ children }:{children:React.ReactNode}) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  return (<Provider value={{ ...state, dispatch }}>{children}</Provider>);
};

export default CalculatorProvider;
