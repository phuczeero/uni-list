import * as React from 'react';
import { render } from '@testing-library/react';

import { theme } from 'styles/theme';
import { SearchField } from '..';
import { ThemeProvider } from 'styled-components/macro';

const renderWithTheme = () =>
  render(
    <ThemeProvider theme={theme}>
      <SearchField />
    </ThemeProvider>,
  );

describe('<SearchField  />', () => {
  it('should match snapshot', () => {
    const component = renderWithTheme();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
