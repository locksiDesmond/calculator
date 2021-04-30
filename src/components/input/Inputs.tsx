import React, { useContext, useEffect, useCallback } from 'react';
import Button from '../Button/Button';
import divide from '../../images/divide.svg';
import deleteIcon from '../../images/delete.svg';
import handleWindowClicks from './../../libs/handleWindowClicks';
import CalculatorContext from '../../context/CalculatorContext';

import './inputs.css';

export default function Inputs() {
  const { theme, solution, dispatch } = useContext(CalculatorContext);
  const windowClick = useCallback(
    (e) => {
      handleWindowClicks(solution, dispatch, e);
    },
    [solution, dispatch]
  );
  useEffect(() => {
    window.addEventListener('keyup', windowClick);

    return () => {
      window.removeEventListener('keyup', windowClick);
    };
  }, [windowClick]);
  const numberStyle = {
    backgroundColor: theme.numbers,
    color: '#fff',
  };
  const arithmeticStyle = {
    backgroundColor: theme.arithmetics,
    color: '#000',
  };
  const adStyle = {
    backgroundColor: theme.adStyle,
    color: theme.adColor,
  };
  return (
    <div className="inputs">
      <Button style={adStyle} clear value="C" />
      <Button style={arithmeticStyle} arithmetic value="%" />
      <Button style={arithmeticStyle} arithmetic value="X" />
      <Button style={arithmeticStyle} arithmetic value="/" image={divide} />
      <Button style={numberStyle} number value="7" />
      <Button style={numberStyle} number value="8" />
      <Button style={numberStyle} number value="9" />
      <Button style={arithmeticStyle} arithmetic value="+" />
      <Button style={numberStyle} number value="6" />
      <Button style={numberStyle} number value="5" />
      <Button style={numberStyle} number value="4" />
      <Button style={arithmeticStyle} arithmetic value="-" />
      <Button number style={numberStyle} value="1" />
      <Button style={numberStyle} number value="2" />
      <Button style={numberStyle} number value="3" />{' '}
      <Button
        style={{
          gridRowStart: '4',
          gridRowEnd: '6',
          gridColumnStart: '4',
          ...adStyle,
        }}
        solve
        value="="
      />
      <Button image={deleteIcon} style={adStyle} value="del" delete />
      <Button style={numberStyle} number value="0" />
      <Button style={arithmeticStyle} arithmetic value="." />
    </div>
  );
}
