import React, { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";
const InitialState = { currentInput: "", history: [], arithmetic: "" };
const store = createContext(InitialState);
const { Provider } = store;
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export { store, StateProvider };
