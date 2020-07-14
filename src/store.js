import React, { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";
import { Daylight } from "./ThemeColor";
const InitialState = {
  currentInput: "",
  history: [],
  arithmetic: "",
  theme: Daylight,
};
const store = createContext(InitialState);
const { Provider } = store;
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export { store, StateProvider };
