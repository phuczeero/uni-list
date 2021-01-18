import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.homePage || initialState;

export const selectSearchTerm = createSelector(
  [selectDomain],
  homePageState => homePageState.searchTerm,
);

export const selectLoading = createSelector(
  [selectDomain],
  homePageState => homePageState.loading,
);

export const selectUniversities = createSelector(
  [selectDomain],
  homePageState => homePageState.universities,
);
