import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../types';

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
    endGame: (state, action) => {
      console.log(action.payload);
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

export const { ping, pong, endGame, countUp, countDown } = appSlice.actions;

