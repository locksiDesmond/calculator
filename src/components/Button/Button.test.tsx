import { render, screen, fireEvent } from 'src/test-util';
import React from 'react';
import Button from './Button';
import { Daylight } from 'src/utils/ThemeColor';

describe('Render Button', () => {
  test('render correctly without props', () => {
    render(<Button />);
    let button = screen.getByTestId('button-');

    expect(button).toBeEmptyDOMElement();
  });

  describe('Button with props', () => {
    const props = {
      style: {
        backgroundColor: Daylight.numbers,
        color: '#fff',
      },
      value: 'x',
    };

    let button: any;
    beforeEach(() => {
      render(<Button {...props} />);
      button = screen.getByTestId(`button-${props.value}`);
    });

    test('render correctly with props', () => {
      expect(button).toHaveTextContent('x');
      expect(button).toHaveStyle(
        `background-color:${props.style.backgroundColor}`
      );
      expect(button).toHaveStyle(`color:${props.style.color}`);
    });
  });
});
