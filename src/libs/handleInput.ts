/**
 * @param value - value to add to current state
 * @param input - the current state
 * @returns string
 */
export const InputValue = (value: string, input: any) => {
  if (input.length < 18) {
    if (Number(value)) {
      // Add digit
      let inputValue = input;
      if (inputValue === '0') {
        inputValue = '' + value;
      } else if (inputValue) {
        inputValue += value;
      } else {
        inputValue = '' + value;
      }
      return inputValue;
    } else if (value === '0') {
      // Add zero
      let inputValue = input;
      if (Number(inputValue)) {
        inputValue += value;
      } else if (inputValue.length > 1) {
        inputValue += value;
      } else {
        inputValue = '' + value;
      }
      return inputValue;
    } else {
      return input;
    }
  } else {
    return input;
  }
};

export const handleArithmetic = (value: string, state: any) => {
  let arithmetic = state;
  if (!arithmetic) {
    return state;
  }
  const lastItem = arithmetic.slice(arithmetic.length - 1, arithmetic.length);
  if (lastItem !== '0' && !Number(lastItem)) {
    const newValue = state.slice(0, state.length - 1);
    return checkValue(value, newValue);
  }
  return checkValue(value, arithmetic);
};

const checkValue = (value: string, arithmetic: string) => {
  switch (value) {
    case '/':
      arithmetic += '/';
      return arithmetic;
    case '+':
      arithmetic += '+';
      return arithmetic;
    case '-':
      arithmetic += '-';
      return arithmetic;
    case 'X':
    case '*':
      arithmetic += '*';
      return arithmetic;
    case '.':
      arithmetic += '.';
      return arithmetic;
    case '%':
      arithmetic += '%';
      return arithmetic;
    default:
      return arithmetic;
  }
};
class Evaluate {
  calculate(e: string) {
    const result = this.eval(e);
    return result;
  }
  eval(e: string) {
    try {
      //eslint-disable-next-line
      const answer = eval(e);
      return answer;
    } catch (err) {
      return e;
    }
  }
}
export const Solve = (value: string) => {
  const arithmetic = value;
  const lastItem = arithmetic.slice(arithmetic.length - 1, arithmetic.length);

  if (Number(lastItem) || lastItem === '0') {
    const solve = new Evaluate();
    const result = solve.calculate(value);
    return Math.round((result + Number.EPSILON) * 10000) / 10000;
  }
  if (lastItem === '%') {
    const newValue = value.slice(0, value.length - 1);
    const a = Number(newValue) / 100;
    return a;
  }
};
