import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ErrorMessage } from '../ErrorMessage';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const renderWithTheme = props =>
  render(
    <ThemeProvider theme={theme}>
      <ErrorMessage {...props} />,
    </ThemeProvider>,
  );

describe('<ErrorMessage />', () => {
  it('should render and match the snapshot', () => {
    const component = renderWithTheme({ message: 'test', onClose: () => {} });
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should focus button on mount', () => {
    const component = renderWithTheme({ message: 'test', onClose: () => {} });
    const button = component.getByRole('button');
    expect(button).toHaveFocus();
  });

  it('should handle close button clicked', () => {
    const mock = jest.fn();
    const component = renderWithTheme({ message: 'test', onClose: mock });
    const button = component.getByRole('button');
    fireEvent.click(button);
    expect(mock).toBeCalled();
  });
});
