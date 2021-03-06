import React from 'react';
import { useCalculator } from '../../context/CalculatorContext';
import * as Types from '../../utils/Types';

export default function Button(props: any) {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: ' 1px solid #EDF0EE',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    ...props.style,
  };

  const {
    dispatch,
    state: { solution },
  } = useCalculator();

  const handleClick = () => {
    if (props.number) {
      if (solution) {
        dispatch({ type: Types.CLEAR_SOLVE });
        dispatch({ type: Types.CLEAR });
      }
      dispatch({ type: Types.INPUT_VALUE, payload: props.value });
    } else if (props.delete) {
      dispatch({ type: Types.DELETE });
    } else if (props.clear) {
      dispatch({ type: Types.CLEAR });
    } else if (props.arithmetic) {
      if (solution) {
        dispatch({ type: Types.CLEAR_SOLVE });
        dispatch({ type: Types.CLEAR });
        dispatch({ type: Types.INPUT_VALUE, payload: solution });
      }
      dispatch({ type: Types.ARITHMETIC, payload: props.value });
    } else if (props.solve) {
      dispatch({ type: Types.SOLVE });
    }
  };
  return (
    <button
      data-testid={`button-${props.value || ''}`}
      onClick={handleClick}
      className="input-div"
      style={style}
    >
      {props.image ? <img src={props.image} alt={props.value} /> : props.value}
    </button>
  );
}
