import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components/macro';

import { FavoritePage } from '..';
import { theme } from 'styles/theme';

const renderComponent = () =>
  render(
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <FavoritePage />
      </ThemeProvider>
    </HelmetProvider>,
  );

describe('<FavoritePage />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
