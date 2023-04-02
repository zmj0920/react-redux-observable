import { Action } from "@reduxjs/toolkit";
import { Epic } from "redux-observable";

export type RootEpic = Epic<Action, Action>;

export interface AppState {
  count:number
}

export interface StoreState {
  app: AppState;
}
