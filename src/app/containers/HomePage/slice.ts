import { PayloadAction } from '@reduxjs/toolkit';
import { University } from 'types/University';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the HomePage container
export const initialState: ContainerState = {
  searchTerm: '',
  universities: [],
  loading: false,
  error: null,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    loadUniversities(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.loading = true;
    },
    loadSuccess(state, action: PayloadAction<University[]>) {
      state.loading = false;
      state.universities = action.payload;
    },
    loadError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
      state.loading = false;
    },
    saveToJSON() {},
  },
});

export const {
  actions: homePageActions,
  reducer,
  name: sliceKey,
} = homePageSlice;
