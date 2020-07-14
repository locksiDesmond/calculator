export const InputValue = (value, currentInput) => {
  if (currentInput.length < 16) {
    if (Number(value)) {
      // Add digit
      let currentInputValue = currentInput;
      console.log(currentInputValue);
      if (currentInputValue === "0") {
        currentInputValue = "" + value;
      } else if (currentInputValue) {
        currentInputValue += value;
      } else {
        currentInputValue = "" + value;
      }
      return currentInputValue;
    } else if (value === "0") {
      // Add zero
      let currentInputValue = currentInput;
      if (Number(currentInputValue)) {
        currentInputValue += value;
      } else if (currentInputValue.length > 1) {
        currentInputValue += value;
      } else {
        currentInputValue = "" + value;
      }
      return currentInputValue;
    } else {
      return currentInput;
    }
  } else {
    return currentInput;
  }
};
export function handleArithmetic(value, state) {
  let arithmeticValue = state;
  if (!arithmeticValue) {
    return state;
  }
  const lastItem = arithmeticValue.slice(
    arithmeticValue.length - 1,
    arithmeticValue.length
  );
  if (!Number(lastItem)) {
    const newvalue = state.slice(0, state.length - 1);
    return checkvalue(value, newvalue);
  }
  // const newvalue = state.slice(0, state.length - 1);
  console.log(value);
  return checkvalue(value, arithmeticValue);
}
const checkvalue = (value, arithmeticValue) => {
  switch (value) {
    case "/":
      arithmeticValue += "/";
      return arithmeticValue;
    case "+":
      arithmeticValue += "+";
      return arithmeticValue;
    case "-":
      arithmeticValue += "-";
      return arithmeticValue;
    case "X":
    case "*":
      arithmeticValue += "*";
      return arithmeticValue;
    case ".":
      arithmeticValue += ".";
      return arithmeticValue;
    case "%":
      arithmeticValue += "%";
      return arithmeticValue;
    default:
      return arithmeticValue;
  }
};
class Evaluate {
  foo(e) {
    const result = this.eval(e);
    return result;
  }
  eval(e) {
    //eslint-disable-next-line
    const answer = eval(e);
    return answer;
  }
}
export const Solve = (value) => {
  const arithmeticValue = value;
  const lastItem = arithmeticValue.slice(
    arithmeticValue.length - 1,
    arithmeticValue.length
  );

  if (Number(lastItem) || lastItem === "0") {
    const solve = new Evaluate();
    const result = solve.foo(value);
    return result;
  } else if (lastItem === "%") {
    const newvalue = value.slice(0, value.length - 1);
    const a = Number(newvalue) / 100;
    return a;
  } else {
  }
};
