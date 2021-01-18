import * as slice from '../slice';
import { ContainerState } from '../types';
import { University } from 'types/University';

describe('HomePage slice', () => {
  let state: ContainerState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should handle loadUniversities', () => {
    const text = 'test';
    expect(
      slice.reducer(state, slice.homePageActions.loadUniversities(text)),
    ).toEqual<ContainerState>({
      ...slice.initialState,
      searchTerm: text,
      loading: true,
    });
  });

  it('should handle loadSuccess', () => {
    const universities = [{ name: 'test' }] as University[];
    expect(
      slice.reducer(state, slice.homePageActions.loadSuccess(universities)),
    ).toEqual<ContainerState>({
      ...slice.initialState,
      loading: false,
      universities,
    });
  });

  it('should handle loadError', () => {
    const error = Error('test');
    expect(
      slice.reducer(state, slice.homePageActions.loadError(error)),
    ).toEqual<ContainerState>({
      ...slice.initialState,
      loading: false,
      error,
    });
  });
});
