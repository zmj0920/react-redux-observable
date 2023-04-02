import { combineEpics } from 'redux-observable';
import { delay, filter, map, mergeMap, tap } from 'rxjs/operators';
import { ping, countUp, endGame, pong } from '../reducers';
import { ajax } from "rxjs/ajax";
import { RootEpic } from '../types';



const ping$: RootEpic = (action$) =>
  action$.pipe(
    filter(ping.match),
    delay(1000),
    tap(() => {
      console.log('延迟执行');
    }),
    mergeMap(() => ajax.getJSON('https://api.github.com/users/soraping')
      .pipe(
        map((response: any) => endGame(response)),
      ))
  );

const pong$: RootEpic = (action$) =>
  action$.pipe(
    filter(pong.match),
    tap(() => console.log('pong')),
    // map(() => endGame())
  );

export const appEpic$ = combineEpics(ping$, pong$);
