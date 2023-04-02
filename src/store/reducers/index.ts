import { appSlice } from "./app.slice";

export * from "./app.slice";

const reducers = {
  app: appSlice.reducer,
}

export default reducers;
