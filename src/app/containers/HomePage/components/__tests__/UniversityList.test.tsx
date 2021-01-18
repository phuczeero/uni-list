import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components/macro';

import { theme } from 'styles/theme';
import { configureAppStore } from 'store/configureStore';
import { UniversityList } from '../UniversityList';

const renderUniversityList = store =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <UniversityList />
      </ThemeProvider>
    </Provider>,
  );

describe('<UniversityList />', () => {
  let store: ReturnType<typeof configureAppStore>;
  beforeEach(() => {
    store = configureAppStore();
  });

  it('should render spinner', () => {
    const mockStore = {
      ...store,
      getState: () => ({
        homePage: {
          loading: true,
        },
      }),
    };
    const component = renderUniversityList(mockStore);
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should render not found message', () => {
    const mockStore = {
      ...store,
      getState: () => ({
        homePage: {
          loading: false,
          universities: [],
        },
      }),
    };
    const component = renderUniversityList(mockStore);
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should render university list', () => {
    const mockStore = {
      ...store,
      getState: () => ({
        homePage: {
          loading: false,
          universities: [{ name: 'test', web_pages: ['test.name'] }],
        },
      }),
    };
    const component = renderUniversityList(mockStore);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
