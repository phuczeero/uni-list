import * as React from 'react';
import { render } from '@testing-library/react';

import { theme } from 'styles/theme';
import { TextField } from '..';

const renderWithTheme = () => render(<TextField theme={theme} />);

describe('<TextField  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = renderWithTheme();
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
