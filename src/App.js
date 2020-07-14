import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import { StateProvider } from "./store";

function App() {
  return (
    <StateProvider>
      <Calculator />
    </StateProvider>
  );
}

export default App;
