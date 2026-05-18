import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './boardSlice';
import teamReducer from './teamSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
    team: teamReducer
  }
});
