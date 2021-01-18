import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components/macro';

import { theme } from 'styles/theme';
import { Spinner } from '..';

const renderWithTheme = () =>
  render(
    <ThemeProvider theme={theme}>
      <Spinner />
    </ThemeProvider>,
  );

describe('<Spinner  />', () => {
  it('should match snapshot', () => {
    const component = renderWithTheme();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
