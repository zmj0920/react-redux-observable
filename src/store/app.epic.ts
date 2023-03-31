import { Action } from '@reduxjs/toolkit';
import { combineEpics, Epic } from 'redux-observable';
import { delay, filter, map, tap } from 'rxjs/operators';
import { appSlice } from './app.slice';

export type RootEpic = Epic<Action, Action>;

const ping$: RootEpic = (action$) =>
  action$.pipe(
    filter(appSlice.actions.ping.match),
    delay(1000),
    map(() =>appSlice.actions.countUp())
  );

const pong$: RootEpic = (action$) =>
  action$.pipe(
    filter(appSlice.actions.pong.match),
    tap(() => console.log('pong')),
    map(() => appSlice.actions.endGame())
  );

export const appEpic$ = combineEpics(ping$, pong$);
