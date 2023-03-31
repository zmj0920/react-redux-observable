import {configureStore, Action } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { appSlice } from './app.slice';
import { appEpic$ } from './app.epic';

const epicMiddleware = createEpicMiddleware<Action, Action>();

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(epicMiddleware);
  },
});

epicMiddleware.run(appEpic$);

export default store

