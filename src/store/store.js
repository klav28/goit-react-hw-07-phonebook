import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { pbReducer } from './pbSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['phonebook'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    phonebook: pbReducer,
    filter: filterReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
