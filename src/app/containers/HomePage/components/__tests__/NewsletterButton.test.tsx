import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ErrorMessage } from '../ErrorMessage';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { NewsletterButton } from '../NewsletterButton';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { configureAppStore } from 'store/configureStore';

const renderNewsletterButton = store =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NewsletterButton />
      </ThemeProvider>
    </Provider>,
  );

describe('<NewsletterButton />', () => {
  let store: ReturnType<typeof configureAppStore>;
  beforeEach(() => {
    store = configureAppStore();
  });

  it('should not render if universities are empty', () => {
    const mockStore = {
      ...store,
      getState: () => ({
        homePage: {
          universities: [],
        },
      }),
    };
    const component = renderNewsletterButton(mockStore);
    expect(component.container.firstChild).toBe(null);
  });

  it('should render and match the snapshot', () => {
    const mockStore = {
      ...store,
      getState: () => ({
        homePage: {
          universities: [{ name: 'test' }],
        },
      }),
    };
    const component = renderNewsletterButton(mockStore);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
