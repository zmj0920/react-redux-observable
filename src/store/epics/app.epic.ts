import { combineEpics } from 'redux-observable';
import { delay, filter, map, mergeMap, tap } from 'rxjs/operators';
import { ping, countUp, endGame, pong, fetchUser, setUser } from '../reducers';
import { RootEpic } from '../types';
import { getUsers } from '../api';


const fetchUser$: RootEpic = (action$) =>
  action$.pipe(
    filter(fetchUser.match),
    mergeMap(() => getUsers()
      .pipe(
        map((res: any) => setUser(res)),
      ))
  );

const pong$: RootEpic = (action$) =>
  action$.pipe(
    filter(pong.match),
    tap(() => console.log('pong')),
    // map(() => endGame())
  );

export const appEpic$ = combineEpics(fetchUser$, pong$);
