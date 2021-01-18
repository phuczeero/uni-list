import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { theme } from 'styles/theme';
import { Link } from '..';

const renderWithTheme = () =>
  render(
    <MemoryRouter>
      <Link to="/" theme={theme}>
        Test
      </Link>
    </MemoryRouter>,
  );

describe('<Link  />', () => {
  it('should match snapshot', () => {
    const component = renderWithTheme();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
