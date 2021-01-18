import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '..';
import { theme } from 'styles/theme';

const renderWithTheme = (props = {}) =>
  render(
    <Button theme={theme} {...props}>
      Test
    </Button>,
  );

describe('<Button  />', () => {
  it('should match snapshot', () => {
    const component = renderWithTheme();
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should match outline snapshot', () => {
    const component = renderWithTheme({ variant: 'outline' });
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
