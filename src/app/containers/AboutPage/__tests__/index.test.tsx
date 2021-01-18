import * as React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components/macro';

import { theme } from 'styles/theme';
import { AboutPage } from '..';

const renderComponent = () =>
  render(
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <AboutPage />
      </ThemeProvider>
    </HelmetProvider>,
  );

describe('<AboutPage />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
