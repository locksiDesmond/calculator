import { render, screen, fireEvent } from 'src/test-util';
import React from 'react';

import Main from './index';
import { message } from '../../helper/toPreview';

describe('Render SideNav', () => {
  let main: any;
  beforeEach(() => {
    const props = {
      toggle: () => {},
    };
    render(<Main {...props} />);
    main = screen.getByTestId('main-calculator');
  });

  test('render correctly', () => {
    expect(screen.getByTestId('solution')).toHaveTextContent('');
    expect(screen.getByTestId('current-input')).toBeEmptyDOMElement();
  });

  test('Buttons should reflect on output', () => {
    fireEvent.click(screen.getByText(/4/));

    expect(screen.getByTestId('current-input')).toHaveTextContent('4');
    expect(screen.getByTestId('solution')).toHaveTextContent('');
  });

  test('multiple Buttons reflect on output', () => {
    fireEvent.click(screen.getByText(/5/));
    fireEvent.click(screen.getByText(/9/));

    expect(screen.getByTestId('current-input')).toHaveTextContent('59');
    expect(screen.getByTestId('solution')).toHaveTextContent('');
  });

  test('allow multiple Buttons to reflect on outputs and should show solution if = is clicked', () => {
    fireEvent.click(screen.getByText(/2/));
    fireEvent.click(screen.getByText(/X/));
    fireEvent.click(screen.getByText(/4/));

    expect(screen.getByTestId('current-input')).toHaveTextContent('2 X 4');
    expect(screen.getByTestId('solution')).toHaveTextContent('');

    fireEvent.click(screen.getByTestId('button-='));
    expect(screen.getByTestId('current-input')).toHaveTextContent('2 X 4');
    expect(screen.getByTestId('solution')).toHaveTextContent('8');
  });

  test('allow - be used to start an operation', () => {
    fireEvent.click(screen.getByText(/-/));
    fireEvent.click(screen.getByText(/2/));
    fireEvent.click(screen.getByText(/X/));
    fireEvent.click(screen.getByText(/4/));

    fireEvent.click(screen.getByTestId('button-='));
    expect(screen.getByTestId('current-input')).toHaveTextContent('-2 X 4');
    expect(screen.getByTestId('solution')).toHaveTextContent('-8');
  });
  test('not allow other operation except - and + be used to start an operation', () => {
    fireEvent.click(screen.getByTestId('button-X'));
    fireEvent.click(screen.getByText(/2/));
    fireEvent.click(screen.getByText(/X/));
    fireEvent.click(screen.getByText(/4/));

    fireEvent.click(screen.getByTestId('button-='));
    expect(screen.getByTestId('current-input')).toHaveTextContent('2 X 4');
    expect(screen.getByTestId('solution')).toHaveTextContent('8');
  });

  test('ensure the  clear button clear state', () => {
    fireEvent.click(screen.getByText(/2/));
    fireEvent.click(screen.getByText(/X/));
    fireEvent.click(screen.getByText(/4/));
    fireEvent.click(screen.getByTestId('button-='));
    expect(screen.getByTestId('current-input')).toHaveTextContent('2 X 4');
    expect(screen.getByTestId('solution')).toHaveTextContent('8');

    fireEvent.click(screen.getByTestId('button-C'));
    expect(screen.getByTestId('solution')).toHaveTextContent('8');
    expect(screen.getByTestId('current-input')).toHaveTextContent('');
  });

  test(`should display ${message.dumb} for 1 + 1`, () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByTestId('button-+'));
    fireEvent.click(screen.getByText('1'));

    expect(screen.getByTestId('current-input')).toHaveTextContent(message.dumb);
    expect(screen.getByTestId('solution')).toHaveTextContent('');

    fireEvent.click(screen.getByTestId('button-='));
    expect(screen.getByTestId('current-input')).toHaveTextContent(message.dumb);
    expect(screen.getByTestId('solution')).toHaveTextContent('2');
  });

  test(`should display ${message.stupid} for 0 + 0`, () => {
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByTestId('button-+'));
    fireEvent.click(screen.getByText('0'));

    expect(screen.getByTestId('current-input')).toHaveTextContent(
      message.stupid
    );
    expect(screen.getByTestId('solution')).toHaveTextContent('');

    fireEvent.click(screen.getByTestId('button-='));
    expect(screen.getByTestId('current-input')).toHaveTextContent(
      message.stupid
    );
    expect(screen.getByTestId('solution')).toHaveTextContent('0');
  });
});
