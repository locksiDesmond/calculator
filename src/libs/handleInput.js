export const InputValue = (value, currentInput) => {
  if (currentInput.length < 18) {
    if (Number(value)) {
      // Add digit
      let currentInputValue = currentInput;
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
  if (lastItem !== "0" && !Number(lastItem)) {
    const newvalue = state.slice(0, state.length - 1);
    return checkvalue(value, newvalue);
  }
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
    try {
      //eslint-disable-next-line
      const answer = eval(e);
      return answer;
    } catch (err) {
      return e;
    }
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
    return Math.round((result + Number.EPSILON) * 10000) / 10000;
  } else if (lastItem === "%") {
    const newvalue = value.slice(0, value.length - 1);
    const a = Number(newvalue) / 100;
    return a;
  } else {
  }
};
