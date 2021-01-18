import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components/macro';

import { Navbar } from '..';
import { theme } from 'styles/theme';
import { MemoryRouter } from 'react-router-dom';

const renderWithTheme = () =>
  render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </MemoryRouter>,
  );

describe('<Navbar  />', () => {
  it('should match snapshot', () => {
    const component = renderWithTheme();
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should handle toggle menu', () => {
    const component = renderWithTheme();
    expect(component.container.firstChild).toMatchSnapshot();
    const button = component.getByRole('button');
    fireEvent.click(button);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
