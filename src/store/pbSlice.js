import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialState from '../components/contacts';

const pbSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addEntry: {
      reducer(state, action) {
        if (
          state.find(
            el => el.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          alert(`${action.payload.name} is already exists in contacts`);
          return;
        }
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(4),
          },
        };
      },
    },
    deleteEntry(state, action) {
      const index = state.findIndex(entry => entry.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addEntry, deleteEntry } = pbSlice.actions;

export const pbReducer = pbSlice.reducer;
