import { configureStore } from '@reduxjs/toolkit';

import cardSlice from './slices/cardSlice';

export const makeStore = () => {
  return configureStore({
    reducer: cardSlice,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
