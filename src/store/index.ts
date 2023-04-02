import { configureStore, Action } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import { rootEpic$ } from './epics';
import { StoreState } from './types';

const epicMiddleware = createEpicMiddleware<Action, Action, StoreState>();

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(epicMiddleware);
  },
});

epicMiddleware.run(rootEpic$);

export default store

