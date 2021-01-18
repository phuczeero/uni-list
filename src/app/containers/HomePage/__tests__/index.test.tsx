import * as React from 'react';
import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from '..';
import { configureAppStore } from 'store/configureStore';
import { homePageActions, initialState } from '../slice';
import { theme } from 'styles/theme';

function* mockHomePageSaga() {}

jest.mock('../saga', () => ({
  homePageSaga: mockHomePageSaga,
}));

const renderHomePage = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <HomePage />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>,
  );

describe('<HomePage />', () => {
  let store: ReturnType<typeof configureAppStore>;
  let component: ReturnType<typeof renderHomePage>;

  beforeEach(() => {
    store = configureAppStore();
    component = renderHomePage(store);
    expect(store.getState().homePage).toEqual(initialState);
  });
  afterEach(() => {
    component.unmount();
  });

  it('should display welcome message when searchTerm is empty', () => {
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should display university list', () => {
    const searchTerm = 'test';
    store.dispatch(homePageActions.loadUniversities(searchTerm));
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
