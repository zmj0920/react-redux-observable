import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  count:number
}

const initialState: AppState = {
  count:0
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    ping: (state, action ) => {
          state.count = action.payload
    },
    pong: () => {},
    endGame: () => {
    },
    countUp: (state) => {
      console.log(222);

      state.count += 1;
    },
    countDown: (state) =>  {
      state.count -= 1
    },
  },
});

export const { countUp, countDown } = appSlice.actions;

