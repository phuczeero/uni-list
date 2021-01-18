import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components/macro';

import { Card } from '..';
import { theme } from 'styles/theme';

const renderWithTheme = () =>
  render(
    <ThemeProvider theme={theme}>
      <Card title="Test" content="Test content" />
    </ThemeProvider>,
  );

describe('<Card  />', () => {
  it('should match snapshot', () => {
    const component = renderWithTheme();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
