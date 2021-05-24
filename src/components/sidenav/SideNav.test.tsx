import { render, screen, fireEvent } from 'src/test-util';
import { Daylight, NightMode } from 'src/utils/ThemeColor';
import React from 'react';

import SideNav from './Sidenav';

describe('Render SideNav', () => {
  let sideNav: any;
  beforeEach(() => {
    const props = {
      toggle: () => {},
    };
    render(<SideNav {...props} />);
    sideNav = screen.getByTestId('side-nav');
  });
  test('renders with correct default color', () => {
    expect(sideNav).toHaveStyle(`background-color:${Daylight.sidenav} `);
    expect(sideNav).toHaveStyle(`color:${Daylight.text} `);
    expect(screen.queryByText(/Daylight/)).toBeInTheDocument();
    expect(screen.queryByText(/Night/)).toBeNull();
  });
  test('allow user to change background color', () => {
    expect(sideNav).toHaveStyle(`background-color:${Daylight.sidenav} `);
    expect(screen.queryByText(/Night/)).toBeNull();
    fireEvent.click(screen.getByTestId('theme-button'));
    expect(sideNav).toHaveStyle(`background-color:${NightMode.sidenav} `);
    expect(sideNav).toHaveStyle(`color:${NightMode.text} `);
    expect(screen.queryByText(/Daylight/)).toBeNull();
    expect(screen.queryByText(/Night/)).toBeInTheDocument();
  });

  test('allow multiple change of background color', () => {
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
