import React, { useState, useEffect, useContext } from 'react';
import hambugger from '../../images/menu_dark.svg';
import hambuggerLight from '../../images/menu_light.svg';
import CalculatorContext from '../../context/CalculatorContext';
import './output.css';
import toPreview from '../../helper/toPreview';
export default function Outputs(props: any) {
  const { currentInput, theme, solution } = useContext(CalculatorContext);
  const [currentState, setCurrentState] = useState('');

  useEffect(() => {
    const preview = toPreview(currentInput);
    setCurrentState(preview);
  }, [currentInput]);
  return (
    <React.Fragment>
      <div
        className="output"
        style={{
          backgroundColor: theme.output,
          color: theme.outputText,
        }}
      >
        <p className="current-input" data-testid="current-input">
          {currentState}
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '2.7rem' }}>=</span>
          <p
            className="current-answer"
            data-testid="solution"
            style={{ color: theme.adColor }}
          >
            {solution &&
              solution.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </p>
        </div>
      </div>
      <span onClick={() => props.toggle()} className="hamburger">
        {theme.mode === 'daylight' ? (
          <img src={hambugger} alt="hambugger" />
        ) : (
          <img src={hambuggerLight} alt="hambugger" />
        )}
      </span>
    </React.Fragment>
  );
}
