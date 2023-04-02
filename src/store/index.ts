import { configureStore, Action } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger'
import reducers from './reducers';
import { rootEpic$ } from './epics';
import { StoreState } from './types';

const epicMiddleware = createEpicMiddleware<Action, Action, StoreState>();
const isDev = process.env.NODE_ENV === 'dev'
const loggerMiddleware = createLogger({ collapsed: true });

const middleware: any = [epicMiddleware]

if(isDev){
  middleware.push(loggerMiddleware)
}

export const store = configureStore({
  reducer: reducers,
  middleware: middleware
});

epicMiddleware.run(rootEpic$);

export default store

