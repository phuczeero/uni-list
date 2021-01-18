import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SearchForm } from '../SearchForm';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { homePageActions } from '../../slice';

const renderSearchForm = store =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SearchForm />,
      </ThemeProvider>
    </Provider>,
  );

describe('<SearchForm />', () => {
  let store: ReturnType<typeof configureAppStore>;
  beforeEach(() => {
    store = configureAppStore();
  });

  it('should render and match the snapshot', () => {
    const component = renderSearchForm(store);
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should handle valid submit', () => {
    const mock = jest.fn();
    const mockStore = { ...store, dispatch: mock };
    const component = renderSearchForm(mockStore);
    const input = component.getByPlaceholderText('Search universities');
    const form = component.container.querySelector('form') as HTMLFormElement;
    const searchTerm = 'test';
    fireEvent.change(input, { target: { value: searchTerm } });
    fireEvent.submit(form);
    expect(mock).toBeCalledWith(homePageActions.loadUniversities(searchTerm));
  });
});
