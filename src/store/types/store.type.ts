import { Action } from "@reduxjs/toolkit";
import { Epic } from "redux-observable";
import { AppState } from "./app.epics.type";

export type RootEpic = Epic<Action, Action>;

export interface StoreState {
  app: AppState;
}
