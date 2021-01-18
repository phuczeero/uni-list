import * as React from 'react';
import { render } from '@testing-library/react';

import { theme } from 'styles/theme';
import { Container } from '..';

const renderWithTheme = () =>
  render(<Container theme={theme}>Test content</Container>);

describe('<Container  />', () => {
  it('should match snapshot', () => {
    const component = renderWithTheme();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
