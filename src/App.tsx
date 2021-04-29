import React from "react";
import CalculatorProvider from "./provider/CalculatorProvider";
import Calculator from "./components/Calculator";

function App() {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
}

export default App;
