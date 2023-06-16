import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterEntry(state, action) {
      return { filter: action.payload };
    },
  },
});

export const { filterEntry } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
