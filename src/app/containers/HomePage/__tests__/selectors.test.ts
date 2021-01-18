import * as selectors from '../selectors';
import { RootState } from 'types';
import { initialState } from '../slice';
import { University } from 'types/University';

describe('HomePage selectors', () => {
  let state: RootState = {};

  beforeEach(() => {
    state = {};
  });

  it('should select searchTerm', () => {
    const searchTerm = 'test';
    state = {
      homePage: { ...initialState, searchTerm },
    };
    expect(selectors.selectSearchTerm(state)).toEqual(searchTerm);
  });

  it('should select universities', () => {
    const university = { name: 'test' } as University;
    state = {
      homePage: { ...initialState, universities: [university] },
    };
    expect(selectors.selectUniversities(state)).toEqual([university]);
  });

  it('should select loading', () => {
    const loading = true;
    state = {
      homePage: { ...initialState, loading: loading },
    };
    expect(selectors.selectLoading(state)).toEqual(loading);
  });
});
