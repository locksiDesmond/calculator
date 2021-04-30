import { render, screen, fireEvent } from 'src/test-util';
import { Daylight, NightMode } from 'src/utils/ThemeColor';
import React from 'react';

import SideNav from './Sidenav';

describe('Render SideNav', () => {
  beforeEach(() => {
    const props = {
      toggle: () => {},
    };
    render(<SideNav {...props} />);
  });
  test('allow user to change background color', () => {
    const sideNav = screen.getByTestId('side-nav');

    expect(sideNav).toHaveStyle(`background-color:${Daylight.sidenav} `);
    expect(sideNav).toHaveStyle(`color:${Daylight.text} `);
    expect(screen.queryByText(/Daylight/)).toBeInTheDocument();
    expect(screen.queryByText(/Night/)).toBeNull();
    fireEvent.click(screen.getByTestId('theme-button'));
    expect(sideNav).toHaveStyle(`background-color:${NightMode.sidenav} `);
    expect(sideNav).toHaveStyle(`color:${NightMode.text} `);
    expect(screen.queryByText(/Daylight/)).toBeNull();
    expect(screen.queryByText(/Night/)).toBeInTheDocument();
  });

  test('allow multiple change of background color', () => {
    const sideNav = screen.getByTestId('side-nav');

    expect(sideNav).toHaveStyle(`background-color:${Daylight.sidenav} `);
    expect(sideNav).toHaveStyle(`color:${Daylight.text} `);
    expect(screen.queryByText(/Daylight/)).toBeInTheDocument();
    expect(screen.queryByText(/Night/)).toBeNull();
    fireEvent.click(screen.getByTestId('theme-button'));
    expect(screen.queryByText(/Daylight/)).toBeNull();
    fireEvent.click(screen.getByTestId('theme-button'));
    expect(screen.queryByText(/Daylight/)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('theme-button'));
    fireEvent.click(screen.getByTestId('theme-button'));
    expect(screen.queryByText(/Daylight/)).toBeInTheDocument();
  });
});

// expect(getByTestId('background')).toHaveStyle(`background-image: url(${props.image})`)
