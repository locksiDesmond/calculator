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
/**
 * This handles concatenating arithmetics to state
 * @param arithmetic arithmetic to be added to state. e.g +, -
 * @param currentState string to be adding to.
 * @returns string
 */
export const handleArithmetic = (arithmetic: string, currentState: any) => {
  let state = currentState;
  if (!state) {
    if (arithmetic !== '-') return state;
  }
  const lastItem = state.slice(state.length - 1, state.length);
  if (lastItem !== '0' && !Number(lastItem)) {
    const newValue = state.slice(0, state.length - 1);
    return checkValue(arithmetic, newValue);
  }
  return checkValue(arithmetic, state);
};

/**
 *
 * @param arithmetic arithmetics to add to state
 * @param state string to concatenate arithmetic with
 * @returns string
 */
const checkValue = (arithmetic: string, state: string) => {
  switch (arithmetic) {
    case '/':
      state += '/';
      return state;
    case '+':
      state += '+';
      return state;
    case '-':
      state += '-';
      return state;
    case 'X':
    case '*':
      state += '*';
      return state;
    case '.':
      state += '.';
      return state;
    case '%':
      state += '%';
      return state;
    default:
      return state;
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
