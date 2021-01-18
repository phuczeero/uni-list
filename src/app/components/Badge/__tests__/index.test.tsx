import * as React from 'react';
import { render } from '@testing-library/react';

import { Badge } from '..';
import { theme } from 'styles/theme';

const renderWithTheme = () => render(<Badge theme={theme}>Test</Badge>);

describe('<Badge  />', () => {
  it('should match snapshot', () => {
    const component = renderWithTheme();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
