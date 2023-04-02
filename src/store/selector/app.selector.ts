import { StoreState } from "../types";

export const getCount = (store: StoreState) =>
  store.app.count || '';

export const getUser = (store: StoreState)=> store.app.user || {};
