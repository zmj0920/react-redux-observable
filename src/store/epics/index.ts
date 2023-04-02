import { combineEpics } from 'redux-observable';
import { appEpic$ } from './app.epic';

export const rootEpic$ = combineEpics(appEpic$);
