import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

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
});
